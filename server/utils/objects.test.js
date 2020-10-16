/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

const { detailedDiff } = require('deep-object-diff')

const { isObject, isNoObject, ensureObject, expectObject, findInObject, setInObject } = require('./objects')

describe('Utility-module "objects" exports', () => {
  _runTestsAboutIsObject()
  _runTestsAboutIsNoObject()
  _runTestsAboutEnsureObject()
  _runTestsAboutExpectObject()
  _runTestsAboutFindInObject()
  _runTestsAboutSetInObject()
})

function _runTestsAboutIsObject() {
  describe('a function isObject() which', () => {
    it('is accessible', () => {
      expect(isObject).toBeFunction()
    })

    it('- when given an object, an array or a class instance - returns true', () => {
      const workingInput = _listTestData('valid-objects')
      workingInput.forEach(input => {
        expect([input, isObject(input)]).toEqual([input, true])
      })
    })

    it('- when given something else - returns false', () => {
      const failingInput = _listTestData('non-objects')
      failingInput.forEach(input => {
        expect([input, isObject(input)]).toEqual([input, false])
      })
    })
  })
}

function _runTestsAboutIsNoObject() {
  describe('a function isNoObject() which', () => {
    it('is accessible', () => {
      expect(isNoObject).toBeFunction()
    })

    it('- when given an object, an array or a class instance - returns false', () => {
      const failingInput = _listTestData('valid-objects')
      failingInput.forEach(input => {
        expect([input, isNoObject(input)]).toEqual([input, false])
      })
    })

    it('- when given something else - returns true', () => {
      const workingInput = _listTestData('non-objects')
      workingInput.forEach(input => {
        expect([input, isNoObject(input)]).toEqual([input, true])
      })
    })
  })
}

function _runTestsAboutEnsureObject() {
  describe('a function ensureObject() which', () => {
    it('is accessible', () => {
      expect(ensureObject).toBeFunction()
    })

    it('- when used w/o arguments - returns an empty object', () => {
      // @ts-ignore
      expect(ensureObject()).toEqual({})
    })

    it('- when given an object, an array or a class instance - returns input data', () => {
      const workingInput = _listTestData('valid-objects')
      workingInput.forEach(input => {
        expect(ensureObject(input)).toEqual(input)
      })
    })

    it('- when given something else - returns an empty object', () => {
      const failingInput = _listTestData('non-objects')
      failingInput.forEach(input => {
        expect(ensureObject(input)).toEqual({})
      })
    })

    it('- when used with empty path - returns input-object or empty object', () => {
      const workingInput = _listTestData('valid-objects')
      workingInput.forEach(input => {
        expect(ensureObject(input, { path: '' })).toEqual(input)
      })

      const failingInput = _listTestData('non-objects')
      failingInput.forEach(input => {
        expect(ensureObject(input, { path: '' })).toEqual({})
      })
    })

    it('- when used with valid paths - returns found object-property or empty object', () => {
      const testObject = _createComplexTestObject()
      const validPathsToObjects = ['courses', 'courses.codes', 'pages', 'researcher']
      const validPathsToNonObjects = [
        'defaultLanguage',
        'isStaff',
        'city',
        'courses.codes.1',
        'courses.codes.5',
        'researcher.orcid',
        'pages.length',
        'pages.2',
      ]

      const foundProperties = { objects: {}, nonObjects: {} }
      validPathsToObjects.forEach(path => {
        foundProperties.objects[path] = ensureObject(testObject, { path })
      })
      validPathsToNonObjects.forEach(path => {
        foundProperties.nonObjects[path] = ensureObject(testObject, { path })
      })

      expect(foundProperties).toMatchInlineSnapshot(`
        Object {
          "nonObjects": Object {
            "city": Object {},
            "courses.codes.1": Object {},
            "courses.codes.5": Object {},
            "defaultLanguage": Object {},
            "isStaff": Object {},
            "pages.2": Object {},
            "pages.length": Object {},
            "researcher.orcid": Object {},
          },
          "objects": Object {
            "courses": Object {
              "codes": Array [
                "IK279U",
                "II263X",
                "II746U",
              ],
              "visibility": "public",
            },
            "courses.codes": Array [
              "IK279U",
              "II263X",
              "II746U",
            ],
            "pages": Array [],
            "researcher": Object {
              "googleScholarId": "",
              "orcid": "0000-0001-2345-6789",
              "researchGate": "",
              "researcherId": "",
              "scopusId": "",
            },
          },
        }
      `)
      Object.keys(foundProperties.objects).every(key => {
        expect(foundProperties.objects[key]).toBeObject()
        expect(foundProperties.objects[key]).not.toEqual({})
      })
      Object.keys(foundProperties.nonObjects).every(key => {
        expect(foundProperties.nonObjects[key]).toEqual({})
      })
    })

    it('- when used with paths to non-existent properties - returns empty object', () => {
      const testObject = _createComplexTestObject()
      const validPathsToNonExistentProperties = [
        ':#-courses',
        'City',
        'courses codes',
        'courses:codes',
        'pages.2',
        'researcher.orcid.createdAt',
        'researcher.unknownId',
        'username',
      ]

      const results = {}
      validPathsToNonExistentProperties.forEach(path => {
        results[path] = ensureObject(testObject, { path })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          ":#-courses": Object {},
          "City": Object {},
          "courses codes": Object {},
          "courses:codes": Object {},
          "pages.2": Object {},
          "researcher.orcid.createdAt": Object {},
          "researcher.unknownId": Object {},
          "username": Object {},
        }
      `)
      Object.keys(results).every(key => {
        expect(results[key]).toEqual({})
      })
    })

    it('- when used with invalid path-strings - returns empty object', () => {
      const testObject = _createComplexTestObject()
      const invalidPaths = ['.', '.defaultLanguage', 'defaultLanguage.', 'courses..codes']

      const results = {}
      invalidPaths.forEach(path => {
        results[path] = ensureObject(testObject, { path })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          ".": Object {},
          ".defaultLanguage": Object {},
          "courses..codes": Object {},
          "defaultLanguage.": Object {},
        }
      `)
      Object.keys(results).every(key => {
        expect(results[key]).toEqual({})
      })
    })
  })
}

function _runTestsAboutExpectObject() {
  describe('a function expectObject() which', () => {
    it('is accessible', () => {
      expect(expectObject).toBeFunction()
    })
    it('- when given an object, an array or a class instance - returns input object', () => {
      const workingInput = _listTestData('valid-objects')

      workingInput.forEach(input => {
        expect(expectObject(input)).toEqual(input)
      })
    })

    it('- when given something else - returns null', () => {
      const failingInput = _listTestData('non-objects')

      failingInput.forEach(input => {
        expect(expectObject(input)).toEqual(null)
      })
    })

    it('- when given an object and using { failResult } - still returns input object', () => {
      const testObject = { name: 'test' }
      const testFailResults = [null, new Error('test error'), 79, testObject, 'test string']

      testFailResults.forEach(failResult => {
        expect(expectObject(testObject, { failResult })).toBe(testObject)
      })
    })

    it('- when given a non-object and using { failResult } - returns or THROWS failResult', () => {
      const testObject = 'no object'
      const testFailResults = [null, new Error('test error'), 79, testObject, 'test string']

      testFailResults.forEach(failResult => {
        if (failResult instanceof Error) {
          expect(() => expectObject(testObject, { failResult })).toThrow(failResult)
        } else {
          expect(expectObject(testObject, { failResult })).toBe(failResult)
        }
      })
    })
  })
}

function _runTestsAboutFindInObject() {
  describe('a function findInObject() which', () => {
    it('is accessible', () => {
      expect(findInObject).toBeFunction()
    })

    it('- when used w/o arguments - THROWS as expected', () => {
      expect(findInObject).toThrow(/Cannot \w+ property/)
    })

    it('- when used with missing arguments - returns or THROWS failResult', () => {
      const testObject = _createComplexTestObject()

      // @ts-ignore
      expect(findInObject({ object: testObject })).toBeNull()
      // @ts-ignore
      expect(findInObject({ path: 'city' })).toBeNull()
      // @ts-ignore
      expect(findInObject({ object: testObject, path: 79 })).toBeNull()

      const testFailResults = [null, 179, 'fail', false]
      testFailResults.forEach(failResult => {
        // @ts-ignore
        expect(findInObject({ object: testObject, failResult })).toBe(failResult)
        // @ts-ignore
        expect(findInObject({ path: 'city', failResult })).toBe(failResult)
        // @ts-ignore
        expect(findInObject({ object: testObject, path: 79, failResult })).toBe(failResult)
      })

      const testError = new Error('test error')
      // @ts-ignore
      expect(() => findInObject({ object: testObject, failResult: testError })).toThrow(testError)
      // @ts-ignore
      expect(() => findInObject({ path: 'city', failResult: testError })).toThrow(testError)
      // @ts-ignore
      expect(() => findInObject({ object: testObject, path: 79, failResult: testError })).toThrow(testError)
    })

    it('- when used with empty path - returns any input', () => {
      const testObject = _createComplexTestObject()
      const workingInput = [testObject, 'test string', 79, null, true]

      workingInput.forEach(input => {
        expect(findInObject({ object: input, path: '' })).toEqual(input)
      })
    })

    it('- when used with valid paths - finds properties in test-object', () => {
      const testObject = _createComplexTestObject()
      const testPaths = [
        'courses',
        'courses.codes',
        'courses.codes.2',
        'courses.codes.length',
        'defaultLanguage',
        'isStaff',
        'pages',
        'researcher.orcid',
      ]

      const results = {}
      testPaths.forEach(path => {
        results[path] = JSON.stringify(findInObject({ object: testObject, path }))
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          "courses": "{\\"visibility\\":\\"public\\",\\"codes\\":[\\"IK279U\\",\\"II263X\\",\\"II746U\\"]}",
          "courses.codes": "[\\"IK279U\\",\\"II263X\\",\\"II746U\\"]",
          "courses.codes.2": "\\"II746U\\"",
          "courses.codes.length": "3",
          "defaultLanguage": "\\"sv\\"",
          "isStaff": "true",
          "pages": "[]",
          "researcher.orcid": "\\"0000-0001-2345-6789\\"",
        }
      `)
      expect(Object.keys(results).every(key => results[key] != null)).toBe(true)
    })

    it('- when used with paths to non-existent properties - returns undefined', () => {
      const testObject = _createComplexTestObject()
      const testPaths = [
        ':#-courses',
        'City',
        'courses codes',
        'courses:codes',
        'pages.2',
        'researcher.orcid.createdAt',
        'researcher.unknownId',
        'username',
      ]
      const failResult = new Error("shouldn't be thrown")

      const results = {}
      testPaths.forEach(path => {
        results[path] = findInObject({ object: testObject, path, failResult })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          ":#-courses": undefined,
          "City": undefined,
          "courses codes": undefined,
          "courses:codes": undefined,
          "pages.2": undefined,
          "researcher.orcid.createdAt": undefined,
          "researcher.unknownId": undefined,
          "username": undefined,
        }
      `)
      expect(Object.keys(results).every(key => results[key] === undefined)).toBe(true)
    })

    it('- when used with invalid path-strings - returns failResult', () => {
      const testObject = _createComplexTestObject()
      const testPaths = ['.', '.defaultLanguage', 'defaultLanguage.', 'courses..codes']
      const failResult = 'used in case of problems'

      const results = {}
      testPaths.forEach(path => {
        results[path] = findInObject({ object: testObject, path, failResult })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          ".": "used in case of problems",
          ".defaultLanguage": "used in case of problems",
          "courses..codes": "used in case of problems",
          "defaultLanguage.": "used in case of problems",
        }
      `)
      expect(Object.keys(results).every(key => results[key] === failResult)).toBe(true)
    })

    it('- when used with { expectObject: true } and empty path - succeeds if input is an object', () => {
      const testObject = _createComplexTestObject()
      const failResult = 'used in case of problems'

      const workingInputWithEmptyPath = findInObject({ object: testObject, path: '', failResult, expectObject: true })
      expect(workingInputWithEmptyPath).toEqual(testObject)
    })

    it('- when used with { expectObject: true } and empty path - FAILS if input is not an object', () => {
      const object = 'test string'
      const failResult = 'used in case of problems'

      const failingInputWithEmptyPath = findInObject({ object, path: '', failResult, expectObject: true })
      expect(failingInputWithEmptyPath).toBe(failResult)
    })

    it('- when used with { expectObject: true } - still returns objects', () => {
      const testObject = _createComplexTestObject()
      const failResult = 'used in case of problems'

      const results = {}

      const workingTestPaths = ['courses', 'courses.codes', 'pages']
      workingTestPaths.forEach(path => {
        results[path] = findInObject({ object: testObject, path, failResult, expectObject: true })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          "courses": Object {
            "codes": Array [
              "IK279U",
              "II263X",
              "II746U",
            ],
            "visibility": "public",
          },
          "courses.codes": Array [
            "IK279U",
            "II263X",
            "II746U",
          ],
          "pages": Array [],
        }
      `)
      expect(Object.keys(results).every(key => results[key] !== failResult)).toBe(true)
    })

    it('- when used with { expectObject: true } - FAILS if result is not an object', () => {
      const testObject = _createComplexTestObject()
      const failResult = 'used in case of problems'

      const results = {}

      const failingTestPaths = [
        'courses.codes.2',
        'courses.codes.length',
        'defaultLanguage',
        'isStaff',
        'researcher.orcid',
      ]

      failingTestPaths.forEach(path => {
        results[path] = findInObject({ object: testObject, path, failResult, expectObject: true })
      })

      expect(results).toMatchInlineSnapshot(`
        Object {
          "courses.codes.2": "used in case of problems",
          "courses.codes.length": "used in case of problems",
          "defaultLanguage": "used in case of problems",
          "isStaff": "used in case of problems",
          "researcher.orcid": "used in case of problems",
        }
      `)
      expect(Object.keys(results).every(key => results[key] === failResult)).toBe(true)
    })
  })
}

function _runTestsAboutSetInObject() {
  describe('a function setInObject() which', () => {
    const unchangedTestObject = _createComplexTestObject()

    it('is accessbile', () => {
      expect(setInObject).toBeFunction()
    })

    it('- when used w/o arguments - THROWS as expected', () => {
      expect(setInObject).toThrow(/Cannot \w+ property/)
    })

    it('- when used with missing arguments - THROWS as expected', () => {
      const testObject = _createComplexTestObject()

      expect(() => {
        // @ts-ignore
        setInObject({ path: 'city', newValue: 'Berlin' })
      }).toThrow(/missing.+argument/)
      expect(() => {
        // @ts-ignore
        setInObject({ object: testObject, newValue: 'Berlin' })
      }).toThrow(/missing.+argument/)
    })

    it('- when used with invalid arguments - THROWS as expected', () => {
      const objectList = [79, false, () => true]
      objectList.forEach(object => {
        expect(() => {
          setInObject({ object, path: 'testProp', newValue: 'test' })
        }).toThrow(/invalid argument.+object/)
      })

      const pathList = ['', false, [], {}, () => true]
      pathList.forEach(path => {
        expect(() => {
          // @ts-ignore
          setInObject({ object: [], path, newValue: 'test' })
        }).toThrow(/invalid argument.+path/)
      })
    })

    it('- when used with mismatching types of top-level property names - THROWS as expected', () => {
      expect(() => {
        setInObject({ object: [], path: 'testProp', newValue: 'test' })
      }).toThrow(/use non-numeric property name/)

      expect(() => {
        setInObject({ object: {}, path: '79', newValue: 'test' })
      }).toThrow(/use numeric property name/)
    })

    it('- when used with mismatching types of nested property names - THROWS as expected', () => {
      const testObject = _createComplexTestObject()

      expect(() => {
        setInObject({ object: testObject, path: 'courses.3', newValue: 'test' })
      }).toThrow(/use numeric property name/)

      expect(() => {
        setInObject({ object: testObject, path: 'pages.last', newValue: 'test' })
      }).toThrow(/use non-numeric property name/)
    })

    it('- when used w/o newValue - removes the given object property', () => {
      const testObject = _createComplexTestObject()

      setInObject({ object: testObject, path: 'city' })

      expect(detailedDiff(unchangedTestObject, testObject)).toMatchInlineSnapshot(`
        Object {
          "added": Object {},
          "deleted": Object {
            "city": undefined,
          },
          "updated": Object {},
        }
      `)
    })

    it('- when used with basic arguments - changes given property in place', () => {
      const testObject = _createComplexTestObject()

      const result = setInObject({ object: testObject, path: 'city', newValue: 'Berlin' })
      expect(result).toBeUndefined()

      expect(detailedDiff(unchangedTestObject, testObject)).toMatchInlineSnapshot(`
        Object {
          "added": Object {},
          "deleted": Object {},
          "updated": Object {
            "city": "Berlin",
          },
        }
      `)
    })

    it('- when used with nested path - changes property at given sub-object in place', () => {
      const testObject = _createComplexTestObject()

      setInObject({ object: testObject, path: 'courses.visibility', newValue: 'private' })

      expect(detailedDiff(unchangedTestObject, testObject)).toMatchInlineSnapshot(`
        Object {
          "added": Object {},
          "deleted": Object {},
          "updated": Object {
            "courses": Object {
              "visibility": "private",
            },
          },
        }
      `)
    })

    it('- when using an existing numeric array-index - changes array-items', () => {
      const testObject = _createComplexTestObject()

      setInObject({ object: testObject, path: 'courses.codes.1', newValue: 'testCode' })

      expect(testObject.courses.codes).toMatchInlineSnapshot(`
        Array [
          "IK279U",
          "testCode",
          "II746U",
        ]
      `)
    })

    it('- when using a non-existing numeric array-index - pads with undefined items if needed', () => {
      const testObject = _createComplexTestObject()

      setInObject({ object: testObject, path: 'pages.3', newValue: 'testPage' })

      expect(testObject.pages).toMatchInlineSnapshot(`
        Array [
          undefined,
          undefined,
          undefined,
          "testPage",
        ]
      `)
    })

    it('- when using non-existing paths - creates new sub-objects where needed', () => {
      const testObject = _createComplexTestObject()

      setInObject({
        object: testObject,
        path: 'testProperty.login.user',
        newValue: { name: 'testUser', password: 'seCRet' },
      })
      setInObject({
        object: testObject,
        path: 'testProperty.timezoneOffset',
        newValue: 2.0,
      })

      // @ts-ignore
      expect(testObject.testProperty).toMatchInlineSnapshot(`
        Object {
          "login": Object {
            "user": Object {
              "name": "testUser",
              "password": "seCRet",
            },
          },
          "timezoneOffset": 2,
        }
      `)
    })

    it('- when using non-existing numeric paths - creates new sub-arrays where needed', () => {
      const testObject = _createComplexTestObject()

      setInObject({
        object: testObject,
        path: 'users',
        newValue: [],
      })
      setInObject({
        object: testObject,
        path: 'users.1',
        newValue: { name: 'tesTUser2', password: 'seCRet2' },
      })
      setInObject({
        object: testObject,
        path: 'users.0',
        newValue: { name: 'tesTUser1', password: 'seCRet1' },
      })

      // @ts-ignore
      expect(testObject.users).toMatchInlineSnapshot(`
        Array [
          Object {
            "name": "tesTUser1",
            "password": "seCRet1",
          },
          Object {
            "name": "tesTUser2",
            "password": "seCRet2",
          },
        ]
      `)
    })

    it('- when used w/o flag "copySubObjectsOnPath" - directly changes nested input objects', () => {
      const testObject1 = _createComplexTestObject()
      const testObject2 = { ...testObject1 }

      setInObject({
        object: testObject2,
        path: 'courses.visibility',
        newValue: 'private',
      })

      expect(testObject1.courses.visibility).toBe('private')
      expect(testObject2.courses.visibility).toBe('private')
    })

    it('- when used with flag "copySubObjectsOnPath" - copies nested input objects', () => {
      const testObject1 = _createComplexTestObject()
      const testObject2 = { ...testObject1 }

      setInObject({
        object: testObject2,
        path: 'courses.visibility',
        newValue: 'private',
        copySubObjectsOnPath: true,
      })

      expect(testObject1.courses === testObject2.courses).toBeFalse()
      expect(testObject1.courses.visibility).toBe('public')
      expect(testObject2.courses.visibility).toBe('private')
    })
  })
}

function _createComplexTestObject() {
  const data = {
    defaultLanguage: 'sv',
    isStaff: true,
    isStudent: false,
    city: 'Stockholm',
    researcher: {
      ...{
        orcid: '0000-0001-2345-6789',
        researcherId: '',
        scopusId: '',
        googleScholarId: '',
        researchGate: '',
      },
    },
    courses: { ...{ visibility: 'public', codes: [...['IK279U', 'II263X', 'II746U']] } },
    pages: [],
    visibility: 'public',
  }

  return { ...data }
}

function _listTestData(target) {
  switch (target) {
    case 'valid-objects':
      return [
        {},
        { name: 'test' },
        [],
        ['a', 'c', 'd'],
        /\s\w+\s/,
        new Error('test error'),
        // eslint-disable-next-line no-new-wrappers
        new Number(79),
        // eslint-disable-next-line no-new-wrappers
        new String('test string'),
      ]

    case 'non-objects':
      return [undefined, null, 0, 79, NaN, 3.0, '', 'test string', () => false, Error]

    default:
      throw new Error(`_listTestData() failed - invalid target (${target})`)
  }
}
