def is_prime(number):
    iterator = 2
    sqrt = int(number**.5)
    while (iterator <= sqrt):
        if (number % iterator == 0):
            return False

        iterator += 1

    return number > 1


def prime_ant(n):

    actual_array = []
    count_moves = 0
    current_position = 0

    while count_moves < n:
        if current_position == len(actual_array):
            actual_array.append(len(actual_array) + 2)

        if (not is_prime(actual_array[current_position])):
            smallest_divisor = 2
            while (not actual_array[current_position] % smallest_divisor == 0):
                smallest_divisor += 1

            actual_array[current_position] /= smallest_divisor
            actual_array[current_position-1] += smallest_divisor

            current_position -= 1
        else:
            current_position += 1

        count_moves += 1

    return current_position
