export function getHeapSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    heapSortHelper(array, array.length, animations);
    return animations;
}

function heapify(
    mainArray,
    position,
    size,
    animations
) {
    let leftChild = (2 * position) + 1;
    let rightChild = (2 * position) + 2;
    let largest = position;
    if(leftChild<size && mainArray[leftChild] > mainArray[largest]) largest = leftChild;
    if(rightChild<size && mainArray[rightChild] > mainArray[largest]) largest = rightChild;

    if(largest !== position)
    {
        [mainArray[largest], mainArray[position]] = [mainArray[position], mainArray[largest]];

        animations.push([largest, position]);
        animations.push([largest, position]);
        animations.push([largest, position, mainArray[largest], mainArray[position]]);

        heapify(mainArray, largest, size, animations);
    }
}

function heapSortHelper(
    mainArray,
    size,
    animations 
) {
    for(let i=((size/2)-1); i>=0; i--){
        heapify(mainArray, i, size, animations);
    }

    for(let i = size-1; i>0 ; i--)
    {

        [mainArray[i], mainArray[0]] = [mainArray[0], mainArray[i]];
        animations.push([i, 0]);
        animations.push([i, 0]);
        animations.push([i, 0, mainArray[i], mainArray[0]]);
        heapify(mainArray, 0, i, animations);
    }
}