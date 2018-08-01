import { createCanvas } from './canvas-handlers/create-canvas';

//Get Game field to pass into functions
const Engine = ( function() {

    const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.className = 'canvas';

    document.body.appendChild(canvas);

    //Draws out the game
    createCanvas(ctx);

}
(this))

