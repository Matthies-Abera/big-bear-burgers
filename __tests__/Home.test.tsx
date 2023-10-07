import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Component', () => {
    it('should display seven sections', () => {
        render(<Home />); 
        const sections = screen.getAllByTestId('section');
        expect(sections.length).toEqual(7);
    }),

    it('should include two, three pane containers', () => {
        render(<Home />); 
        const panes = screen.getAllByRole('three-pane');
        expect(panes.length).toEqual(2);
    }),

    it('should display one video playing in the hero section', () => {
        render(<Home />); 
        const video = screen.getByTestId('hero-video');
        expect(video).toBeInTheDocument();
    })
})
