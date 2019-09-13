def calculate_collision_table(score):
    angklung_per_column = {}
    all_angklung = set()
    for row in score:
        for col, beat in enumerate(row):
            if col not in angklung_per_column:
                angklung_per_column[col] = set()
            for m in re.finditer("<[0-9A-Gg#]+>", beat):
                angklung = m[0].strip("<>")
                angklung_per_column[col].add(angklung)
                all_angklung.add(angklung) 
    collision_table = {}
    while len(all_angklung) > 0:
        a = all_angklung.pop()
        for b in all_angklung:
            collision_table[pair(a, b)] = 0 
    for i, col in angklung_per_column.items():
        processing = col.copy()
        while len(processing) > 0:
            a = processing.pop()
            for b in list(processing) + list(angklung_per_column.get(i+1, set()) - {a}):
                collision_table[pair(a, b)] += 1 

    # normalize
    max_collision = (len(score) * 2) - 1
    norm_collision_table = {}
    for a_pair in collision table:
        norm_collision_table[a_pair] = collision_table[a_pair] / max_collision 

    return norm_collision_table 
