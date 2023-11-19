package main

import (
	"fmt"
	"strings"
)

func ConcateText(formatedText string, appendText string, qty int64) string {
	if qty == 0 {
		return formatedText
	}

	if qty > 1 {
		appendText += "s"
	}

	separator := ""
	if len(formatedText) > 0 {
		if strings.Contains(formatedText, "and") {
			separator = ", "
		} else {
			separator = " and "
		}
	}

	return fmt.Sprintf("%d %s%s", qty, appendText, separator) + formatedText
}

func FormatDuration(seconds int64) string {
	if seconds == 0 {
		return "now"
	}

	minutes, seconds := seconds/60, seconds%60
	hours, minutes := minutes/60, minutes%60
	days, hours := hours/24, hours%24
	years, days := days/365, days%365

	var formatedText string = ""
	formatedText = ConcateText(formatedText, "second", seconds)
	formatedText = ConcateText(formatedText, "minute", minutes)
	formatedText = ConcateText(formatedText, "hour", hours)
	formatedText = ConcateText(formatedText, "day", days)
	formatedText = ConcateText(formatedText, "year", years)

	return formatedText
}
