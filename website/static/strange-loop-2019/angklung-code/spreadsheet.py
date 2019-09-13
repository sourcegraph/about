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