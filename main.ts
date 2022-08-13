namespace compassv2 {
    export function turn_with_compass(direction: string, angle: number) {
        let end_degrees: number;
        let start_degrees = input.compassHeading()
        // basic.show_number(start_degrees)
        // basic.show_icon(IconNames.HAPPY)
        if (direction == "l") {
            while (true) {
                end_degrees = input.compassHeading()
                if (turned_to_left(start_degrees, end_degrees, angle)) {
                    return
                }

            }
        }

        if (direction == "l") {
            while (true) {
                end_degrees = input.compassHeading()
                if (turned_to_right(start_degrees, end_degrees, angle)) {
                    return
                }

            }
        }

    }

    export function turned_to_left(start_degrees: number, end_degrees: number, angle: number): boolean {
        let opposite_degrees: number;
        let limit: number;
        if (in_one_fourth(start_degrees)) {
            opposite_degrees = start_degrees + 180
            limit = 360 - angle + start_degrees
            return limit > end_degrees && end_degrees > opposite_degrees
        } else if (in_two_fourth(start_degrees)) {
            opposite_degrees = start_degrees + 180
            limit = start_degrees - angle
            return limit > end_degrees && end_degrees >= 0 || opposite_degrees < end_degrees && end_degrees <= 360
        } else if (in_three_fourth(start_degrees)) {
            opposite_degrees = start_degrees - 180
            limit = start_degrees - angle
            return limit > end_degrees && end_degrees > opposite_degrees
        } else if (in_four_fourth(start_degrees)) {
            opposite_degrees = start_degrees - 180
            limit = start_degrees - angle
            return limit > end_degrees && end_degrees > opposite_degrees
        }

        return false
    }

    export function turned_to_right(start_degrees: number, end_degrees: number, angle: number): boolean {
        let opposite_degrees: number;
        let limit: number;
        if (in_one_fourth(start_degrees)) {
            opposite_degrees = start_degrees + 180
            limit = start_degrees + angle
            return limit < end_degrees && end_degrees < opposite_degrees
        } else if (in_two_fourth(start_degrees)) {
            opposite_degrees = start_degrees + 180
            limit = start_degrees + angle
            return limit < end_degrees && end_degrees < opposite_degrees
        } else if (in_three_fourth(start_degrees)) {
            opposite_degrees = start_degrees - 180
            limit = start_degrees + angle
            return limit < end_degrees && end_degrees <= 360 || opposite_degrees > end_degrees && end_degrees >= 0
        } else if (in_four_fourth(start_degrees)) {
            opposite_degrees = start_degrees - 180
            limit = start_degrees + angle - 360
            return limit < end_degrees && end_degrees < opposite_degrees
        }

        return false
    }

    export function in_one_fourth(degrees: number): boolean {
        return 0 <= degrees && degrees < 90
    }

    export function in_two_fourth(degrees: number): boolean {
        return 90 <= degrees && degrees < 180
    }

    export function in_three_fourth(degrees: number): boolean {
        return 180 <= degrees && degrees < 270
    }

    export function in_four_fourth(degrees: number): boolean {
        return 270 <= degrees && degrees < 360
    }
}


