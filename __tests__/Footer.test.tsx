import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import { footerPages } from '@/utils/BusinessInformation'

describe('Footer Component', () => {
    it('should display company copyright text', () => {
        render(<Footer />); 
        const copyright = screen.getByText('Copyright 2022 - Shiso Burger BmbH');
        expect(copyright).toBeInTheDocument();
    }),
    
    it('should render careers button', () => {
        render(<Footer />); 
        const button = screen.getByTestId('careers-button');
        expect(button).toBeInTheDocument();
    }),

    it('should have two external links for social media pages', () => {
        render(<Footer />); 
        const socialMediaLinks = screen.getAllByTestId('social-media-link');
        expect(socialMediaLinks.length).toEqual(2);
    }),

    it('should contain the correct number of links to the additional pages', () => {
        render(<Footer />); 
        const footerLinks = screen.getAllByTestId('footer-link');
        expect(footerLinks.length).toEqual(footerPages.length);
    })
})
