import {render} from '@testing-library/react';
import {breakAt, BreakPointSizes} from './BreakPointSize';

test.each([
    [BreakPointSizes.sm],
    [BreakPointSizes.md],
    [BreakPointSizes.lg],
    [BreakPointSizes.xl]
])('break at %i px size', (size) => {
    expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`)
})