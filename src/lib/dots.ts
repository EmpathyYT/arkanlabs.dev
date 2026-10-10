import { resetCanvasSize } from "./window_utils";
type Dot = { x: number, y: number };
type DotGridState = {
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    dots: Dot[],
    // mouse: { x: number, y: number }
}

type GridSize = {
    columns: number,
    rows: number
}


function setupDotLoop() {
    resetCanvasSize("dot-canvas");
    const canvasData = setupCanvas();
    if (canvasData) {
        const { canvas, ctx } = canvasData;
        const { width, height } = canvas.getBoundingClientRect();
        const spacingBetweenDots = 16;
        // this means each chunk in the grid is 16 + 1 wide
        const dotSize = 1;
        const chunkSize = spacingBetweenDots + dotSize;
        const columns = Math.ceil(width / chunkSize);
        const rows = Math.ceil(height / chunkSize);
        // floor works but could cause some empty space at the bottom
        const gridSize = { columns: columns, rows: rows };
        const dotGridState = {
            canvas: canvas,
            context: ctx,
            dots: []
        };
        animationLoop(dotGridState, gridSize);
    }
}

function setupCanvas() {
    const canvas = document.getElementById("dot-canvas");
    if (!(canvas instanceof HTMLCanvasElement)) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    return { canvas, ctx };
}

function animationLoop(state: DotGridState, gridSize: GridSize) {
    const { canvas, context: ctx } = state;
    const canvasTextColor = window.getComputedStyle(canvas).getPropertyValue("color");
    ctx.fillStyle = canvasTextColor;
    for (let i = 0; i < gridSize.rows; i++) {
        for (let j = 0; j < gridSize.columns; j++) {
            continue;
        }
    }
    
}

