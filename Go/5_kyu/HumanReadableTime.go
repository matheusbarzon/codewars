package main

import "fmt"

func HumanReadableTime(seconds int) string {
	var minutes int = seconds / 60
	seconds = seconds % 60

	var hours int = minutes / 60
	minutes = minutes % 60

	return fmt.Sprintf("%02d:%02d:%02d", hours, minutes, seconds)
}
