def on_button_pressed_a():
    radio.send_value("A", 1)
    music.play(music.tone_playable(294, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_value("B", 0)
    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(117)
basic.clear_screen()