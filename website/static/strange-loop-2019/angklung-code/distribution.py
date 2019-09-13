def generate_distribution(play_time, collision_table, num_players, num_each_angklung):
    angklung_to_distribute = []
    for a, j in num_each_angklung.items():
        angklung_to_distribute.extend(a for _ in range(j)])
    random.shuffle(angklung_to_distribute) 
    distribution = {i: [] for i in range(num_players)}
    while len(angklung_to_distribute) > 0:
        angklung_candidate = angklung_to_distribute.pop()
        candidate_values = {}
        for player_index, player_distribution in distribution.items():
            if angklung_candidate in player_distribution:
                continue 
        weight = 0
        for players_angklung in player_distribution:
            weight -= play_time[players_angklung]
            weight -= collision_table[pair(angklung_candidate, players_angklung)]
            if angklung_candidate LOW_ANGKLUNG and \
               players_angklung it LOW_ANGKLUNG:
                weight -= 1
            weight -= 1 / abs(no_angklung_to_numeral(angklung_candidate)
                            - no_angklung_to_numeral(players_angklung))
        weight -= len(player_distribution) * 3
        candidate_values[player_index] = weight
        if len(candidate_values) == 0:
            raise Exception("Too few players")
        candidate_values_sorted = sorted([(v, i) for i, v in candidate_values.items()],
                                         key=lambda t: t[0], reverse=True)
        distribution[candidate_values_sorted[0][1]].append(angklung_candidate) 

    distribution = {i: sorted(angklungs, key=no_angklung_to_numeral)
                    for i, angklungs in distribution.items()}
    return distribution
			