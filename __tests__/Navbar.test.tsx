/* TODO: CREATE TESTS FOR OPEN AND CLOSE MOBILE NAVIGATION BAR STATES (LOW PRIORITY) */

import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import { desktopPages, mobilePages } from '@/utils/BusinessInformation'

describe('Navbar Component', () => {
    it('should have text "Menu" in navigation bar', () => {
        render(<Navbar />); // ARRANGE
        const myElement = screen.getByText('MENU'); // ACT
        expect(myElement).toBeInTheDocument(); // ASSERT
    }),

    it('should cotain both mobile and desktop navigation bar', () => {
        render(<Navbar />);
        const navigationBars = screen.getAllByTestId('navigation-bar');
        expect(navigationBars.length).toEqual(2);
    }),

    it('desktop navigation bar should contain six elements', () => {
        render(<Navbar />);
        const desktopItems = screen.getAllByRole('desktop-navbar-item');
        expect(desktopItems.length).toEqual(desktopPages.length);
    }),

    it('mobile navigation bar should contain four elements', () => {
        render(<Navbar />);
        const mobileItems = screen.getAllByRole('mobile-navbar-item');
        expect(mobileItems.length).toEqual(mobilePages.length);
    })
})
