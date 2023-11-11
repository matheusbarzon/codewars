package main

func MoveZeros(arr []int) []int {
	newArr := []int{}
	for index := 0; index < len(arr); index++ {
		if arr[index] != 0 {
			newArr = append(newArr, arr[index])
		}
	}
	for index := len(newArr); index < len(arr); index++ {
		newArr = append(newArr, 0)
	}

	return newArr
}
