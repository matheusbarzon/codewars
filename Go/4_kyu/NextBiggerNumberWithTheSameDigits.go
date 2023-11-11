package main

import (
	"sort"
	"strconv"
	"strings"
)

func NextBigger(n int) int {
	var newNumber int = -1
	arrNumber := strings.Split(strconv.Itoa(n), "")

	for i := len(arrNumber) - 2; i >= 0; i-- {
		firstPart := make([]string, len(arrNumber[:i]))
		copy(firstPart, arrNumber[:i])

		secondPart := make([]string, len(arrNumber[i:]))
		copy(secondPart, arrNumber[i:])

		for j := 0; j < len(secondPart); j++ {
			secondPartWithoutIndex := make([]string, len(secondPart))
			copy(secondPartWithoutIndex, secondPart)

			sort.Strings(secondPartWithoutIndex)

			numberInTheMidle := secondPartWithoutIndex[j]

			cadidateArr := append(firstPart, numberInTheMidle)
			cadidateArr = append(cadidateArr, secondPartWithoutIndex[:j]...)
			cadidateArr = append(cadidateArr, secondPartWithoutIndex[j+1:]...)

			var candidateNumber, _ = strconv.Atoi(strings.Join(cadidateArr[:], ""))

			if candidateNumber > n {
				newNumber = candidateNumber
				break
			}
		}

		if newNumber != -1 {
			break
		}

	}

	return newNumber
}
