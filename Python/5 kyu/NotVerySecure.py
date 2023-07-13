import re

def alphanumeric(password):
    string_match = re.search("([a-z]|[A-Z]|[0-9])+", password)

    return False if string_match == None else password[string_match.start():string_match.end()] == password