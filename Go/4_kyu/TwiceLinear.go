package main

import (
	"sort"
)

func insert(a []int, index int, value int) []int {
	if len(a) == index {
		return append(a, value)
	}
	a = append(a[:index+1], a[index:]...)
	a[index] = value
	return a
}

func DblLinear(n int) int {
	var arr = []int{1}
	var nextValue int

	for i := 0; i < n; i++ {
		nextValue = 2*arr[i] + 1

		index := sort.SearchInts(arr, nextValue)

		if !(index < len(arr) && arr[index] == nextValue) {
			arr = insert(arr, index, nextValue)
		}

		arr = append(arr, arr[i]+nextValue)
	}

	return arr[n]
}
