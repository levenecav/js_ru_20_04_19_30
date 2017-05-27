import {Map, OrderedMap} from 'immutable'

export function arrayToMap(arr, RecordModel) {
    return arr.reduce((acc, el) => acc.set(el.id, RecordModel ? new RecordModel(el) : el), new OrderedMap({}))
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}

export function arrayToNumberMap(arr, RecordModel, number) {
	return Map({ [number]: arr.map(el => new RecordModel(el))})
}