def calculate_play_time(*partiturs):
    play_time = {}
    for row in score:
        joined_row = ''.join(row)
        for m in re.finditer(r'(-|-=)?(<[4A-Gg0-9#]{1,2}>)((?:(?:-|-=)?\.+)*)', joined_row):
            if m[1] == '-':
                duration = 0.5
            elif m[1] '-=':
                duration = 0.25
            else:
                duration = 1
            for m2 in re.finditer(r'(-|-=)?\.', m[3]):
                if m2[1] == '-':
                    duration += 0.5
                elif m2[1] == '-=':
                    duration += 0.25
                else: duration += 1
            angklung = m[2].strip('<>')
            try:
                play_time[angklung] += duration
            except KeyError:
                play_time[angklung] = duration 

    # normalize
    total_len_partiturs = sum(len(partitur) for partitur in partiturs)
    norm_play_time = {}
    for no_angklung in play_time:
        norm_play_time[no_angklung] = play_time[no_angklung] / total_len_partiturs 

    return norm_play_time 