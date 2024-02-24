// Quicksort implementation
function quicksort(items, compare) {
  if (items.length <= 1) {
    return items;
  }

  const pivot = items[0];
  const left = [];
  const right = [];

  for (let i = 1; i < items.length; i++) {
    if (compare(items[i], pivot) < 0) {
      left.push(items[i]);
    } else {
      right.push(items[i]);
    }
  }

  return [...quicksort(left, compare), pivot, ...quicksort(right, compare)];
}

// Function to compare items based on value-to-weight ratio
function compareItems(a, b) {
  return (b.value / b.weight) - (a.value / a.weight);
}

export function solveKnapsack(capacity, items) {
  // Sort items using quicksort
  items = quicksort(items, compareItems);
  
  let totalWeight = 0;
  let totalValue = 0;
  const selectedItems = [];

  for (const item of items) {
    if (totalWeight + item.weight <= capacity) {
      totalWeight += item.weight;
      totalValue += item.value;
      selectedItems.push(item);
    } else {
      const remainingCapacity = capacity - totalWeight;
      const fraction = remainingCapacity / item.weight;
      totalValue += fraction * item.value;
      selectedItems.push({ weight: remainingCapacity, value: fraction * item.value });
      break;
    }
  }

  return { profit: totalValue, items: selectedItems };
}