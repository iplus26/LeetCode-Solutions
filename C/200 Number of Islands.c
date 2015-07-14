void dismiss(char** grid, int i, int j, int gridRowSize, int gridColSize){
	if (i > 0 && grid[i-1][j] == '1') {
		grid[i-1][j] = '0';
		dismiss(grid, i - 1, j, gridRowSize, gridColSize);
	}
	if (j > 0 && grid[i][j-1] == '1') {
		grid[i][j-1] = '0';
		dismiss(grid, i, j-1, gridRowSize, gridColSize);
	}
	if (i < gridRowSize-1 && grid[i+1][j] == '1') {
		grid[i+1][j] = '0';
		dismiss(grid, i+1, j, gridRowSize, gridColSize);
	}
	if (j < gridColSize-1 && grid[i][j+1] == '1') {
		grid[i][j+1] = '0';
		dismiss(grid, i, j+1, gridRowSize, gridColSize);
	}
}

int numIslands(char** grid, int gridRowSize, int gridColSize) {
	if (gridRowSize == 0) {
		return 0;
	}	
	int count = 0;    
	for (int i = 0; i < gridRowSize; i++) {
		for (int j = 0; j < gridColSize; j++) {
			if (grid[i][j] == '1') {
				count++;
				dismiss(grid, i, j, gridRowSize, gridColSize);
			}
		}
	}
	return count;
}