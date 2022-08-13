def turn_with_compass(direction: str, angle: number):
    start_degrees = input.compass_heading()
    #basic.show_number(start_degrees)
    #basic.show_icon(IconNames.HAPPY)
    if direction == "l":
        while(True):
            end_degrees = input.compass_heading()
            if turned_to_left(start_degrees, end_degrees, angle):
                return
    if direction == "l":
        while(True):
            end_degrees = input.compass_heading()
            if turned_to_right(start_degrees, end_degrees, angle):
                return

def turned_to_left(start_degrees: number, end_degrees: number, angle: number) -> bool:
    if in_one_fourth(start_degrees):
        opposite_degrees = start_degrees + 180
        limit = 360 - angle + start_degrees
        return limit > end_degrees > opposite_degrees
    elif in_two_fourth(start_degrees):
        opposite_degrees = start_degrees + 180
        limit = start_degrees - angle
        return limit > end_degrees >= 0 or opposite_degrees < end_degrees <= 360
    elif in_three_fourth(start_degrees):
        opposite_degrees = start_degrees - 180
        limit = start_degrees - angle
        return limit > end_degrees > opposite_degrees
    elif in_four_fourth(start_degrees):
        opposite_degrees = start_degrees - 180
        limit = start_degrees - angle
        return limit > end_degrees > opposite_degrees
    return False

def turned_to_right(start_degrees: number, end_degrees: number, angle: number) -> bool:
    if in_one_fourth(start_degrees):
        opposite_degrees = start_degrees + 180
        limit = start_degrees + angle
        return limit < end_degrees < opposite_degrees
    elif in_two_fourth(start_degrees):
        opposite_degrees = start_degrees + 180
        limit = start_degrees + angle
        return limit < end_degrees < opposite_degrees
    elif in_three_fourth(start_degrees):
        opposite_degrees = start_degrees - 180
        limit = start_degrees + angle
        return limit < end_degrees <= 360 or opposite_degrees > end_degrees >= 0
    elif in_four_fourth(start_degrees):
        opposite_degrees = start_degrees - 180
        limit = start_degrees + angle - 360
        return limit < end_degrees < opposite_degrees
    return False

def in_one_fourth(degrees: number) -> bool:
    return 0 <= degrees < 90

def in_two_fourth(degrees: number) -> bool:
    return 90 <= degrees < 180

def in_three_fourth(degrees: number) -> bool:
    return 180 <= degrees < 270

def in_four_fourth(degrees: number) -> bool:
    return 270 <= degrees < 360