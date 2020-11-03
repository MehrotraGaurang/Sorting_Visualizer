export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

function partition(
    mainArray,
    leftIdx,
    rightIdx,
    animations
) {
    const pivot = rightIdx;

    let i=leftIdx-1;

    for(let j=leftIdx; j<rightIdx; j++)
    {
        if(mainArray[j] <= mainArray[pivot])
        {
            i++;
            [mainArray[i], mainArray[j]] = [mainArray[j], mainArray[i]];
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, j, mainArray[i], mainArray[j]]);
        }
    }

    i++;
    [mainArray[i], mainArray[pivot]] = [mainArray[pivot], mainArray[i]];
    animations.push([i, pivot]);
    animations.push([i, pivot]);
    animations.push([i, pivot, mainArray[i], mainArray[pivot]]);

    return i;
}

function quickSortHelper(
    mainArray,
    leftIdx,
    rightIdx,
    animations
) {
    if(leftIdx<rightIdx)
    {
        let pivot = partition(mainArray, leftIdx, rightIdx, animations);

        quickSortHelper(mainArray, leftIdx, pivot-1, animations);
        quickSortHelper(mainArray, pivot+1, rightIdx, animations);
    }
}