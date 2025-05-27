export const taskDifficultiesMap = {
  EASY: { label: 'Łatwe', value: 'EASY' },
  MEDIUM: { label: 'Średnie', value: 'MEDIUM' },
  HARD: { label: 'Trudne', value: 'HARD' },
};

export const getTaskDifficultyName = (taskDifficulty) =>
  taskDifficultiesMap[taskDifficulty].label ?? '-';
