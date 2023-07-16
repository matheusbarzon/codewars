def narcissistic( value ):
    digits = str(value)
    raised = len(digits)
    sum = 0
    for digit in digits:
        sum += pow(int(digit), raised)

    return sum == value