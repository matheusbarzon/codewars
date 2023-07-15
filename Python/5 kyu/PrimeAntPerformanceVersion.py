def is_prime(number):
    iterator = 2
    sqrt = int(number**.5)
    while (iterator <= sqrt):
        if (number % iterator == 0):
            return False, iterator

        iterator += 1

    return number > 1, iterator


def prime_ant(n):
    current_position = 0
    list_of_prime = set()

    actual_array = [x for x in range(2, int(n*0.1))]
    for _ in range(n):
        if (actual_array[current_position] in list_of_prime):
            current_position += 1
            continue

        advance_position, smallest_divisor = is_prime(
            actual_array[current_position]
        )

        if advance_position:
            list_of_prime.add(actual_array[current_position])
            current_position += 1
            continue

        actual_array[current_position] //= smallest_divisor
        actual_array[current_position-1] += smallest_divisor

        current_position -= 1

    return actual_array[0: current_position+1]
