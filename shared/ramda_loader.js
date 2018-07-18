/* eslint-disable global-require */

// export const F = require('ramda/src/F')
// export const T = require('ramda/src/T')
// export const __ = require('ramda/src/__')
// export const add = require('ramda/src/add')
// export const addIndex = require('ramda/src/addIndex')
// export const adjust = require('ramda/src/adjust')
// export const all = require('ramda/src/all')
// export const allPass = require('ramda/src/allPass')
// export const always = require('ramda/src/always')
// export const and = require('ramda/src/and')
// export const any = require('ramda/src/any')
// export const anyPass = require('ramda/src/anyPass')
// export const ap = require('ramda/src/ap')
// export const aperture = require('ramda/src/aperture')
// export const append = require('ramda/src/append')
// export const apply = require('ramda/src/apply')
// export const applySpec = require('ramda/src/applySpec')
// export const applyTo = require('ramda/src/applyTo')
// export const ascend = require('ramda/src/ascend')
// export const assoc = require('ramda/src/assoc')
// export const assocPath = require('ramda/src/assocPath')
// export const binary = require('ramda/src/binary')
// export const bind = require('ramda/src/bind')
// export const both = require('ramda/src/both')
// export const call = require('ramda/src/call')
// export const chain = require('ramda/src/chain')
// export const clamp = require('ramda/src/clamp')
// export const clone = require('ramda/src/clone')
// export const comparator = require('ramda/src/comparator')
// export const complement = require('ramda/src/complement')
// export const compose = require('ramda/src/compose')
// export const composeK = require('ramda/src/composeK')
// export const composeP = require('ramda/src/composeP')
// export const concat = require('ramda/src/concat')
// export const cond = require('ramda/src/cond')
// export const construct = require('ramda/src/construct')
// export const constructN = require('ramda/src/constructN')
// export const contains = require('ramda/src/contains')
// export const converge = require('ramda/src/converge')
// export const countBy = require('ramda/src/countBy')
export const curry = require('ramda/src/curry')
// export const curryN = require('ramda/src/curryN')
// export const dec = require('ramda/src/dec')
// export const defaultTo = require('ramda/src/defaultTo')
// export const descend = require('ramda/src/descend')
// export const difference = require('ramda/src/difference')
// export const differenceWith = require('ramda/src/differenceWith')
// export const dissoc = require('ramda/src/dissoc')
// export const dissocPath = require('ramda/src/dissocPath')
// export const divide = require('ramda/src/divide')
// export const drop = require('ramda/src/drop')
// export const dropLast = require('ramda/src/dropLast')
// export const dropLastWhile = require('ramda/src/dropLastWhile')
// export const dropRepeats = require('ramda/src/dropRepeats')
// export const dropRepeatsWith = require('ramda/src/dropRepeatsWith')
// export const dropWhile = require('ramda/src/dropWhile')
// export const either = require('ramda/src/either')
// export const empty = require('ramda/src/empty')
// export const endsWith = require('ramda/src/endsWith')
// export const eqBy = require('ramda/src/eqBy')
// export const eqProps = require('ramda/src/eqProps')
// export const equals = require('ramda/src/equals')
// export const evolve = require('ramda/src/evolve')
// export const filter = require('ramda/src/filter')
// export const find = require('ramda/src/find')
// export const findIndex = require('ramda/src/findIndex')
// export const findLast = require('ramda/src/findLast')
// export const findLastIndex = require('ramda/src/findLastIndex')
// export const flatten = require('ramda/src/flatten')
// export const flip = require('ramda/src/flip')
// export const forEach = require('ramda/src/forEach')
// export const forEachObjIndexed = require('ramda/src/forEachObjIndexed')
// export const fromPairs = require('ramda/src/fromPairs')
// export const groupBy = require('ramda/src/groupBy')
// export const groupWith = require('ramda/src/groupWith')
// export const gt = require('ramda/src/gt')
// export const gte = require('ramda/src/gte')
// export const has = require('ramda/src/has')
// export const hasIn = require('ramda/src/hasIn')
// export const head = require('ramda/src/head')
// export const identical = require('ramda/src/identical')
// export const identity = require('ramda/src/identity')
// export const ifElse = require('ramda/src/ifElse')
// export const inc = require('ramda/src/inc')
// export const indexBy = require('ramda/src/indexBy')
// export const indexOf = require('ramda/src/indexOf')
// export const init = require('ramda/src/init')
// export const innerJoin = require('ramda/src/innerJoin')
// export const insert = require('ramda/src/insert')
// export const insertAll = require('ramda/src/insertAll')
// export const intersection = require('ramda/src/intersection')
// export const intersperse = require('ramda/src/intersperse')
// export const into = require('ramda/src/into')
// export const invert = require('ramda/src/invert')
// export const invertObj = require('ramda/src/invertObj')
// export const invoker = require('ramda/src/invoker')
// export const is = require('ramda/src/is')
// export const isEmpty = require('ramda/src/isEmpty')
// export const isNil = require('ramda/src/isNil')
// export const join = require('ramda/src/join')
// export const juxt = require('ramda/src/juxt')
// export const keys = require('ramda/src/keys')
// export const keysIn = require('ramda/src/keysIn')
// export const last = require('ramda/src/last')
// export const lastIndexOf = require('ramda/src/lastIndexOf')
// export const length = require('ramda/src/length')
// export const lens = require('ramda/src/lens')
// export const lensIndex = require('ramda/src/lensIndex')
// export const lensPath = require('ramda/src/lensPath')
// export const lensProp = require('ramda/src/lensProp')
// export const lift = require('ramda/src/lift')
// export const liftN = require('ramda/src/liftN')
// export const lt = require('ramda/src/lt')
// export const lte = require('ramda/src/lte')
// export const map = require('ramda/src/map')
// export const mapAccum = require('ramda/src/mapAccum')
// export const mapAccumRight = require('ramda/src/mapAccumRight')
// export const mapObjIndexed = require('ramda/src/mapObjIndexed')
// export const match = require('ramda/src/match')
// export const mathMod = require('ramda/src/mathMod')
// export const max = require('ramda/src/max')
// export const maxBy = require('ramda/src/maxBy')
// export const mean = require('ramda/src/mean')
// export const median = require('ramda/src/median')
// export const memoize = require('ramda/src/memoize')
// export const memoizeWith = require('ramda/src/memoizeWith')
// export const merge = require('ramda/src/merge')
// export const mergeAll = require('ramda/src/mergeAll')
// export const mergeDeepLeft = require('ramda/src/mergeDeepLeft')
// export const mergeDeepRight = require('ramda/src/mergeDeepRight')
// export const mergeDeepWith = require('ramda/src/mergeDeepWith')
// export const mergeDeepWithKey = require('ramda/src/mergeDeepWithKey')
// export const mergeWith = require('ramda/src/mergeWith')
// export const mergeWithKey = require('ramda/src/mergeWithKey')
// export const min = require('ramda/src/min')
// export const minBy = require('ramda/src/minBy')
// export const modulo = require('ramda/src/modulo')
// export const multiply = require('ramda/src/multiply')
// export const nAry = require('ramda/src/nAry')
// export const negate = require('ramda/src/negate')
// export const none = require('ramda/src/none')
// export const not = require('ramda/src/not')
// export const nth = require('ramda/src/nth')
// export const nthArg = require('ramda/src/nthArg')
// export const o = require('ramda/src/o')
// export const objOf = require('ramda/src/objOf')
// export const of = require('ramda/src/of')
// export const omit = require('ramda/src/omit')
// export const once = require('ramda/src/once')
// export const or = require('ramda/src/or')
// export const over = require('ramda/src/over')
// export const pair = require('ramda/src/pair')
// export const partial = require('ramda/src/partial')
// export const partialRight = require('ramda/src/partialRight')
// export const partition = require('ramda/src/partition')
// export const path = require('ramda/src/path')
// export const pathEq = require('ramda/src/pathEq')
// export const pathOr = require('ramda/src/pathOr')
// export const pathSatisfies = require('ramda/src/pathSatisfies')
// export const pick = require('ramda/src/pick')
// export const pickAll = require('ramda/src/pickAll')
// export const pickBy = require('ramda/src/pickBy')
// export const pipe = require('ramda/src/pipe')
// export const pipeK = require('ramda/src/pipeK')
// export const pipeP = require('ramda/src/pipeP')
// export const pluck = require('ramda/src/pluck')
// export const prepend = require('ramda/src/prepend')
// export const product = require('ramda/src/product')
// export const project = require('ramda/src/project')
// export const prop = require('ramda/src/prop')
// export const propEq = require('ramda/src/propEq')
// export const propIs = require('ramda/src/propIs')
// export const propOr = require('ramda/src/propOr')
// export const propSatisfies = require('ramda/src/propSatisfies')
// export const props = require('ramda/src/props')
// export const range = require('ramda/src/range')
// export const reduce = require('ramda/src/reduce')
// export const reduceBy = require('ramda/src/reduceBy')
// export const reduceRight = require('ramda/src/reduceRight')
// export const reduceWhile = require('ramda/src/reduceWhile')
// export const reduced = require('ramda/src/reduced')
// export const reject = require('ramda/src/reject')
// export const remove = require('ramda/src/remove')
// export const repeat = require('ramda/src/repeat')
// export const replace = require('ramda/src/replace')
// export const reverse = require('ramda/src/reverse')
// export const scan = require('ramda/src/scan')
// export const sequence = require('ramda/src/sequence')
// export const set = require('ramda/src/set')
// export const slice = require('ramda/src/slice')
// export const sort = require('ramda/src/sort')
// export const sortBy = require('ramda/src/sortBy')
// export const sortWith = require('ramda/src/sortWith')
// export const split = require('ramda/src/split')
// export const splitAt = require('ramda/src/splitAt')
// export const splitEvery = require('ramda/src/splitEvery')
// export const splitWhen = require('ramda/src/splitWhen')
// export const startsWith = require('ramda/src/startsWith')
// export const subtract = require('ramda/src/subtract')
// export const sum = require('ramda/src/sum')
// export const symmetricDifference = require('ramda/src/symmetricDifference')
// export const symmetricDifferenceWith = require('ramda/src/symmetricDifferenceWith')
// export const tail = require('ramda/src/tail')
// export const take = require('ramda/src/take')
// export const takeLast = require('ramda/src/takeLast')
// export const takeLastWhile = require('ramda/src/takeLastWhile')
// export const takeWhile = require('ramda/src/takeWhile')
// export const tap = require('ramda/src/tap')
// export const test = require('ramda/src/test')
// export const times = require('ramda/src/times')
// export const toLower = require('ramda/src/toLower')
// export const toPairs = require('ramda/src/toPairs')
// export const toPairsIn = require('ramda/src/toPairsIn')
// export const toString = require('ramda/src/toString')
// export const toUpper = require('ramda/src/toUpper')
// export const transduce = require('ramda/src/transduce')
// export const transpose = require('ramda/src/transpose')
// export const traverse = require('ramda/src/traverse')
// export const trim = require('ramda/src/trim')
// export const tryCatch = require('ramda/src/tryCatch')
// export const type = require('ramda/src/type')
// export const unapply = require('ramda/src/unapply')
// export const unary = require('ramda/src/unary')
// export const uncurryN = require('ramda/src/uncurryN')
// export const unfold = require('ramda/src/unfold')
// export const union = require('ramda/src/union')
// export const unionWith = require('ramda/src/unionWith')
// export const uniq = require('ramda/src/uniq')
// export const uniqBy = require('ramda/src/uniqBy')
// export const uniqWith = require('ramda/src/uniqWith')
// export const unless = require('ramda/src/unless')
// export const unnest = require('ramda/src/unnest')
// export const until = require('ramda/src/until')
// export const update = require('ramda/src/update')
// export const useWith = require('ramda/src/useWith')
// export const values = require('ramda/src/values')
// export const valuesIn = require('ramda/src/valuesIn')
// export const view = require('ramda/src/view')
// export const when = require('ramda/src/when')
// export const where = require('ramda/src/where')
// export const whereEq = require('ramda/src/whereEq')
// export const without = require('ramda/src/without')
// export const xprod = require('ramda/src/xprod')
// export const zip = require('ramda/src/zip')
// export const zipObj = require('ramda/src/zipObj')
// export const zipWith = require('ramda/src/zipWith')