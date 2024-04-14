package main

import (
	"sort"
)

func sum(numbers []int) int {
	result := 0
	for _, v := range numbers {
		result += v
	}
	return result
}

func subArraySum(numbers []int, maxValue *int, firstIndex int, lastIndex int) {

	if lastIndex == len(numbers) {
		if *maxValue < numbers[len(numbers)-1] {
			*maxValue = numbers[len(numbers)-1]
		}
		return

	} else if firstIndex > lastIndex {
		subArraySum(numbers, maxValue, 0, lastIndex+1)

	} else {
		sumArr := sum(numbers[firstIndex : lastIndex+1])
		if *maxValue < sumArr {
			*maxValue = sumArr
		}

		subArraySum(numbers, maxValue, firstIndex+1, lastIndex)
	}

}

func MaximumSubarraySum(numbers []int) int {

	if len(numbers) == 0 {
		return 0
	}

	testMaxMin := make([]int, len(numbers))
	copy(testMaxMin, numbers)

	sort.Slice(testMaxMin, func(i, j int) bool {
		return testMaxMin[i] < testMaxMin[j]
	})

	if testMaxMin[len(testMaxMin)-1] < 0 {
		return 0
	}

	if testMaxMin[0] > -1 {
		return sum(numbers)
	}

	var maxSum int = 0
	subArraySum(numbers, &maxSum, 0, 0)

	return maxSum

}
