/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

module.exports = {
  isObject,
  isNoObject,
  ensureObject,
  expectObject,
  findInObject,
  setInObject,
}

/**
 * @param {*} input
 *
 * @returns {boolean}
 *    True - if input is object, array or class instance; or
 *    False - otherwise
 */
function isObject(input) {
  return input != null && typeof input === 'object'
}

/**
 * @param {*} input
 *
 * @returns {boolean}
 *    False - if input is object, array or class instance; or
 *    True - otherwise
 */
function isNoObject(input) {
  return input == null || typeof input !== 'object'
}

/**
 * Please note:
 *  - ensureObject(input)  behaves like
 *    expectObject(input, { failResult: {} })
 *  - ensureObject(input, { path })  behaves like
 *    findInObject({ object: input, path, expectObject: true, failResult: {} })
 *
 * @param {*} input
 *    Data which shall be tested
 * @param {object} [optionsBag]
 * @param {string} [optionsBag.path='']
 *    Description of object-path
 *    to property which shall be extracted
 *      e.g. "", "username", "researcher.orcid"
 *
 * @returns {object}
 *    Input data - if no path is given and input data is object, array or class instance; or
 *    Found property - if path leads to an object, array or class instance; or
 *    {} - otherwise, even in case of problems
 */
function ensureObject(input, optionsBag) {
  if (isNoObject(input)) {
    return {}
  }
  if (isNoObject(optionsBag) || typeof optionsBag.path !== 'string' || optionsBag.path === '') {
    return input
  }

  const { path } = optionsBag

  let result = input
  const propertyPath = path.split('.')
  for (let index = 0; index < propertyPath.length; index++) {
    const propName = propertyPath[index]
    if (isNoObject(result) || propName === '') {
      return {}
    }
    result = result[propName]
  }

  return isObject(result) ? result : {}
}

/**
 * @param {*} input
 * @param {object} [options]
 * @param {*} [options.failResult=null]
 *
 * @returns {*}
 *    Input - if it's an object, an array or a class instance; or
 *    failResult - otherwise.
 * @throws
 *    failResult - if input is a non-object and failResult is an Error-object
 */
function expectObject(input, options) {
  if (isObject(input)) {
    return input
  }
  if (!isObject(options)) {
    return null
  }

  const { failResult } = options

  if (failResult instanceof Error) {
    throw failResult
  }
  return failResult === undefined ? null : failResult
}

/**
 * Please note: Arrays behave like objects, also with this helper function.
 *
 * @param {object} inputBag
 * @param {*} inputBag.object
 *      e.g. { username: "abcd", researcher: { orcid: "0000-0000-0000-0000" } }
 * @param {string} inputBag.path
 *      e.g. "", "username", "researcher.orcid"
 * @param {*} [inputBag.failResult=null]
 *    Result in case of a missing object-argument or an invalid path-argument
 * @param {boolean} [inputBag.expectObject=false]
 *    Set to true if the found property must be an object and
 *    failResult shall be returned if that's not the case
 *
 * @returns {*}
 *    Object property described by path
 *      e.g. complete object, "abcd", "0000-0000-0000-0000"; or
 *    undefined if property can't be found (e.g. "title") or inputBag.object is no object; or
 *    inputBag.failResult in case of problems (e.g. invalid paths ".username", "researcher..orcid")
 * @throws
 *    in case of problems (but only if failResult is an Error-object); or
 *    if inputBag is not an object
 */
function findInObject({ object, path, failResult = null, expectObject: _expectObject = false }) {
  const _failed = () => {
    if (failResult instanceof Error) {
      throw failResult
    }
    return failResult
  }

  if (object === undefined || typeof path !== 'string') {
    return _failed()
  }
  if (path === '') {
    if (_expectObject && isNoObject(object)) {
      return _failed()
    }
    return object
  }

  let result = object

  const propertyPath = path.split('.')
  for (let index = 0; index < propertyPath.length; index++) {
    const propName = propertyPath[index]
    if (propName === '') {
      return _failed()
    }
    if (isNoObject(result)) {
      return _expectObject ? _failed() : undefined
    }
    result = result[propName]
  }

  return _expectObject && isNoObject(result) ? _failed() : result
}

/**
 * @param {object} inputBag
 * @param {object|Array} inputBag.object
 *      e.g. { place: { city: "Stockholm", ... }, ... }
 * @param {string} inputBag.path
 *      e.g. "place.city"
 * @param {*} [inputBag.newValue]
 *      e.g. "Berlin"
 * @param {boolean} [inputBag.copySubObjectsOnPath=false]
 *      Set to true iff the nested input objects
 *      which are part of the given path
 *      shall be copied instead of directly changed
 *      (Please note: This flag has no effect
 *       if the input object is changed on top-level.)
 * @throws
 */
function setInObject({ object, path, newValue, copySubObjectsOnPath = false }) {
  const _checkIfIsArrayIndex = propName => /^\d+$/.test(propName) && parseInt(propName, 10) <= 1000

  const _stepIntoObjectOrFinalize = ({ currSubObject, propertyPath, currPathIndex }) => {
    const currPropName = propertyPath[currPathIndex]
    if (_checkIfIsArrayIndex(currPropName) && Array.isArray(currSubObject) === false) {
      throw new Error("invalid path given (can't use numeric property name with a non-array)")
    }
    if (Array.isArray(currSubObject) && _checkIfIsArrayIndex(currPropName) === false) {
      throw new Error("invalid path given (can't use non-numeric property name with an array)")
    }

    const nextPropName = propertyPath[currPathIndex + 1]
    const isFinalPropName = nextPropName == null
    if (isFinalPropName) {
      if (newValue === undefined) {
        delete currSubObject[currPropName]
      } else {
        currSubObject[currPropName] = newValue
      }
      return null
    }

    const nextSubObject = currSubObject[currPropName]
    if (nextSubObject == null) {
      currSubObject[currPropName] = _checkIfIsArrayIndex(nextPropName) ? [] : {}
      return currSubObject[currPropName]
    }
    if (isObject(nextSubObject)) {
      if (copySubObjectsOnPath) {
        currSubObject[currPropName] = Array.isArray(nextSubObject) ? [...nextSubObject] : { ...nextSubObject }
      }
      return currSubObject[currPropName]
    }

    throw new Error("invalid path given (can't step into non-object)")
  }

  try {
    if (isNoObject(object)) {
      throw new Error('missing or invalid argument "object"')
    }
    if (typeof path !== 'string' || path === '') {
      throw new Error('missing or invalid argument "path"')
    }

    const propertyPath = path.split('.')
    if (propertyPath.length === 0 || propertyPath.some(propName => propName === '')) {
      throw new Error('invalid argument "path"')
    }

    let subObject = object

    for (let index = 0; index < propertyPath.length; index++) {
      subObject = _stepIntoObjectOrFinalize({
        currSubObject: subObject,
        propertyPath,
        currPathIndex: index,
      })
    }
  } catch (error) {
    error.message = `setInObject() failed - ${error.message}`
    throw error
  }
}
