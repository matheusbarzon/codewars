package main

func DirReduc(arr []string) []string {
	opposite := map[string]string{
		"NORTH": "SOUTH",
		"SOUTH": "NORTH",
		"EAST":  "WEST",
		"WEST":  "EAST",
	}

	reduction := []string{""}
	for _, v := range arr {
		if reduction[len(reduction)-1] == opposite[v] {
			reduction = reduction[:len(reduction)-1]
			continue
		}
		reduction = append(reduction, v)
	}

	return reduction[1:]
}
