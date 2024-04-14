package main

func MaximumSubarraySum(numbers []int) int {
	result, current := 0, 0
	for _, v := range numbers {
		current += v

		if result < current {
			result = current
		} else if current < 0 {
			current = 0
		}

	}
	return result
}
