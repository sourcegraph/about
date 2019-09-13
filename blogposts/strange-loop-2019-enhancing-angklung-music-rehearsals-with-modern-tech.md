---
title: "Strange Loop 2019 - Enhancing Angklung Music Rehearsals with Modern Tech"
description: "Angklung is a traditional musical instrument from Indonesia. This instrument has a lot of variety in how it is performed; a common format is the orchestral format in which 15-30 players gather to form a team. Playing angklung in this way is fun but also presents some challenges that are hard to solve manually. In this talk, we will learn how technology is used to improve the quality of rehearsals of this age-old instrument."
author: Ryan Frazier
authorUrl: https://pianomanfrazier.com/
publishDate: 2019-09-13T00:00-15:30
tags: [
  strange-loop
]
slug: strange-loop-2019-enhancing-angklung-music-rehearsals-with-modern-tech
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Trapsilo Bumi</span>
        <a href="https://github.com/tbumi" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Angklung is a traditional musical instrument from Indonesia. This instrument has a lot of variety in how it is performed; a common format is the orchestral format in which 15-30 players gather to form a team. Playing angklung in this way is fun but also presents some challenges that are hard to solve manually. In this talk, we will learn how technology is used to improve the quality of rehearsals of this age-old instrument.

---

<!-- My Stuff Goes Here -->



Trapsilo has played Angklung for over 10 years and has played in Italy, Greece, Maylasia and Singapore. Trapsilo has also conducted several concerts and performances.

## What is an Angklung?

![Angklung Instrument](/blog/strange-loop-2019/angklung/angklung.png)
![Angklung visualize on Piano](/blog/strange-loop-2019/angklung/angklung-piano.png)

## Where is it played?

![Map of Indonesia](/blog/strange-loop-2019/angklung/Indonesia_map.png)
![Map of Bandung, Indonesia](/blog/strange-loop-2019/angklung/Bandung-Indonesia_map.png)

## What are the difficulties playing an Angklung?

Multiple Angklung are assigned to each person in order to cover all of the pitches required for a performance. There are some difficulties in deciding how to distribute Angklungs among performers.

Performers cannot be assigned Angklungs that play conflicting notes in the performance. Also the size difference of the Angklungs needs to be manageable by the performer.

![An Angklung Performance](/blog/strange-loop-2019/angklung/angklung-performance.png)

Traditional notation is not used to dictate an Angklung performance. A cipher notation is used instead.

![Angklung Notation](/blog/strange-loop-2019/angklung/angklung-notation.png)


## The Algorithm

What kind of algorithm could help us distribute the instruments better among the performers?

![Angklung Notation In SpreadSheet](/blog/strange-loop-2019/angklung/angklung-spreadsheet.png)

Angklung Cipher Notation is basically a spreadsheet



### Algorithm Goals

- **Minimize** collisions
- **Maximize** amount of player's time
- Good balance of size of Angklungs



### Implementation

- Read in the spreadsheet in
- Compute note collisions in the piece
- Compute player time (don't want to leave someone out :( )
- Compute Angklung size distribution


### Load Excel SpreadSheet

```py
wb = openpyxl.load_workbook(file_name)
score = [] # music score, List[List[notes]]
for row in wb.active.rows:
    is_empty_row = True
    for cell in row:
        if re.match(NOTE_VALID_CHARS, cell.value):
            is_empty_row = False
            new_row.append(cell.value)
    if is_empty_row:
        internal row = 0
    score[internal_row] += new_row
    internal row += 1 
```


### Calculate Collision Table

```py
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

```


### Calculate Play Time

```py
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
```

### Calculate Instrument Distribution

```py
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
```


