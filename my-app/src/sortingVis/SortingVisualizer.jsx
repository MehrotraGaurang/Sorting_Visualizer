import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgo/mergeSort.js';
import {getQuickSortAnimations} from '../sortingAlgo/quickSort.js';
import {getHeapSortAnimations} from '../sortingAlgo/heapSort.js';
import './SortingVisualizer.css';
import styled from 'styled-components';

const Button = styled.button`
  background: #db4132;
  border-radius: 8px;
  color: white;
  margin-left: 14%;
  margin-top: 23px;
  font-size: 16px;
`;

const ANIMATION_SPEED = 10;

const NUMBER_OF_BARS = 120;

const PRIMARY_COLOR = '#ff5454';

const FINISH_COLOR = '#2fc7f5';

const SECONDARY_COLOR = '#f3fc49';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    
    resetArray(){
        const array = [];

        for(let i=0; i < NUMBER_OF_BARS; i++) {
            array.push(randomIntFromInterval(30, 300));
        }
        //console.log(array);
        this.setState({array});

        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0; i<arrayBars.length; i++) {
            const barStyle = arrayBars[i].style;
            barStyle.backgroundColor = PRIMARY_COLOR;
        }
    }

    mergeSort()
    {
        
        const animations = getMergeSortAnimations(this.state.array);
        
        for(let i=0; i<animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = ((i%3) !== 2);
            if(isColorChange){
                
                //console.log(i);
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    //console.log(barOneIdx);
                    const barOneStyle = arrayBars[barOneIdx].style;
                    //console.log(newHeight);
                    barOneStyle.height = newHeight+'px';
                }, i * ANIMATION_SPEED); 
            }
        }

        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');

            for(let i=0; i<arrayBars.length; i++)
            {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = FINISH_COLOR;
            }
        }, (animations.length * ANIMATION_SPEED) + 10);
        
        
        
        
    }

    quickSort()
    {
        const animations = getQuickSortAnimations(this.state.array);
        
        for(let i=0; i<animations.length; i++)
        {
            const isColorChange = i%3 !== 2;
            const arrayBars = document.getElementsByClassName('array-bar');

            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                    //console.log(barOneIdx);
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    //console.log(newHeight);
                    barOneStyle.height = barOneHeight+'px';
                    barTwoStyle.height = barTwoHeight+'px';
                }, i * ANIMATION_SPEED); 
            }
        }

        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');

            for(let i=0; i<arrayBars.length; i++)
            {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = FINISH_COLOR;
            }
        }, (animations.length * ANIMATION_SPEED) + 10);

        
    }

    heapSort()
    {
        const animations = getHeapSortAnimations(this.state.array);
        
        for(let i=0; i<animations.length; i++)
        {
            const isColorChange = i%3 !== 2;
            const arrayBars = document.getElementsByClassName('array-bar');
            console.log(animations[i]);
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                    //console.log(barOneIdx);
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    //console.log(newHeight);
                    barOneStyle.height = barOneHeight+'px';
                    barTwoStyle.height = barTwoHeight+'px';
                }, i * ANIMATION_SPEED); 
            }
        }

        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');

            for(let i=0; i<arrayBars.length; i++)
            {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = FINISH_COLOR;
            }
        }, (animations.length * ANIMATION_SPEED) + 10);
        //console.log(animations);
        
    }


    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                <div className='wrapper-button'>
                   
                    <Button onClick={() => this.resetArray()}> Generate New Array </Button>
                    <Button onClick={() => this.mergeSort()} > Merge Sort </Button>
                    <Button onClick={() => this.quickSort()} > Quick Sort </Button>
                    <Button onClick={() => this.heapSort()} > Heap Sort </Button>

                    {/* <button onClick={() => this.testSortingAlgo()}>
                    Test Sorting Algorithms (BROKEN)
                    </button> */}
                    
                </div>
                
                <div className='wrapper-bars'>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: value + 'px',
                            }}></div>
                    ))}
                </div>  
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
