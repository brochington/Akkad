import importFillStyle from './FillStyle';
import importFillRect from './FillRect';
import importGetCanvasContext from './GetCanvasContext';
import importCanvasContextToContext from './CanvasContextToContext';

export default {
    FillStyle: importFillStyle,
    FillRect: importFillRect,
    GetCanvasContext: importGetCanvasContext,
    CanvasContextToContext: importCanvasContextToContext
};

export const FillStyle = importFillStyle;
export const RillRect = importFillRect;
export const GetCanvasContext = importGetCanvasContext;
export const CanvasContextToContext = importCanvasContextToContext;
