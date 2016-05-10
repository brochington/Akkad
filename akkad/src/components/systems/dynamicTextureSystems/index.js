import importFillStyle from './FillStyle';
import importFillRect from './FillRect';
import importGetCanvasContext from './GetCanvasContext';
import importCanvasContextToContext from './CanvasContextToContext';
import importRasterizeMarkup from './RasterizeMarkup';

export default {
    FillStyle: importFillStyle,
    FillRect: importFillRect,
    GetCanvasContext: importGetCanvasContext,
    CanvasContextToContext: importCanvasContextToContext,
    RasterizeMarkup: importRasterizeMarkup
};

export const FillStyle = importFillStyle;
export const RillRect = importFillRect;
export const GetCanvasContext = importGetCanvasContext;
export const CanvasContextToContext = importCanvasContextToContext;
export const RasterizeMarkup = importRasterizeMarkup;
