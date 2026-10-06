import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a prefilled email link from the contact form', () => {
    component.formData = {
      name: 'Alex Example',
      email: 'alex@example.com',
      message: 'I would like to discuss a role.',
    };

    const mailtoUrl = new URL(component.buildMailtoUrl());

    expect(mailtoUrl.protocol).toBe('mailto:');
    expect(mailtoUrl.pathname).toBe('anupavikram9250@gmail.com');
    expect(mailtoUrl.searchParams.get('subject')).toBe('Portfolio enquiry from Alex Example');
    expect(mailtoUrl.searchParams.get('body')).toContain('Email: alex@example.com');
    expect(mailtoUrl.searchParams.get('body')).toContain('I would like to discuss a role.');
  });
});
