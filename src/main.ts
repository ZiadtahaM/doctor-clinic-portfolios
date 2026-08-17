import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <!-- Header -->
      <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <div class="text-3xl font-bold text-blue-600">Dr. Sarah Johnson</div>
              <div class="ml-4 text-sm text-gray-600">Cardiologist</div>
            </div>
            <nav class="hidden md:flex space-x-8">
              <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#services" class="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#appointments" class="text-gray-700 hover:text-blue-600 font-medium">Appointments</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <button (click)="showBooking = true" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-5xl font-bold text-gray-900 mb-6">
                Expert <span class="text-blue-600">Cardiac Care</span> You Can Trust
              </h1>
              <p class="text-xl text-gray-600 mb-8">
                With over 15 years of experience in interventional cardiology, I provide comprehensive heart care using the latest medical technologies and personalized treatment approaches.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button (click)="showBooking = true" class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
                <button class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Dr. Sarah Johnson" 
                   class="rounded-2xl shadow-2xl w-full h-96 object-cover">
              <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div class="text-3xl font-bold text-blue-600">15+</div>
                <div class="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">About Dr. Sarah Johnson</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Board-certified cardiologist specializing in interventional procedures and preventive heart care
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="bg-blue-50 p-8 rounded-xl">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• MD from Harvard Medical School</li>
                <li>• Residency at Mayo Clinic</li>
                <li>• Fellowship in Interventional Cardiology</li>
                <li>• Board Certified in Cardiology</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-8 rounded-xl">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Coronary Angioplasty</li>
                <li>• Heart Disease Prevention</li>
                <li>• Cardiac Catheterization</li>
                <li>• Echocardiography</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-8 rounded-xl">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• 2000+ Successful Procedures</li>
                <li>• Top Doctor Award 2023</li>
                <li>• Published 25+ Research Papers</li>
                <li>• 4.9/5 Patient Rating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Cardiac Services</h2>
            <p class="text-lg text-gray-600">Comprehensive heart care tailored to your needs</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of services" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-4xl mb-4">{{service.icon}}</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{service.name}}</h3>
              <p class="text-gray-600 mb-4">{{service.description}}</p>
              <div class="text-blue-600 font-medium">{{service.price}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Appointment Times -->
      <section id="appointments" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Available Appointment Times</h2>
            <p class="text-lg text-gray-600">Choose a convenient time for your consultation</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let day of availableTimes" class="bg-blue-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-4">{{day.day}}</h3>
              <div class="space-y-2">
                <div *ngFor="let time of day.times" 
                     class="bg-white p-3 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-colors"
                     (click)="selectTime(day.day, time)">
                  {{time}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Contact Information</h2>
            <p class="text-lg text-gray-300">Get in touch to schedule your appointment</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-4xl mb-4">📞</div>
              <h3 class="text-xl font-bold mb-2">Phone</h3>
              <p class="text-gray-300">(555) 123-HEART</p>
            </div>
            <div>
              <div class="text-4xl mb-4">📧</div>
              <h3 class="text-xl font-bold mb-2">Email</h3>
              <p class="text-gray-300">dr.johnson&#64;cardiocare.com</p>
            </div>
            <div>
              <div class="text-4xl mb-4">📍</div>
              <h3 class="text-xl font-bold mb-2">Location</h3>
              <p class="text-gray-300">123 Heart Center Ave<br>Medical District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Booking Modal -->
      <div *ngIf="showBooking" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl p-8 max-w-md w-full">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h3>
          <form (ngSubmit)="bookAppointment()" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" [(ngModel)]="booking.name" name="name" required
                     class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" [(ngModel)]="booking.email" name="email" required
                     class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" [(ngModel)]="booking.phone" name="phone" required
                     class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
              <input type="datetime-local" [(ngModel)]="booking.datetime" name="datetime" required
                     class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="flex gap-4 pt-4">
              <button type="submit" class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
              <button type="button" (click)="showBooking = false" 
                      class="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Success Message -->
      <div *ngIf="showSuccess" class="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50">
        <div class="flex items-center">
          <span class="mr-2">✅</span>
          <div>
            <p class="font-medium">Appointment Booked!</p>
            <p class="text-sm">We'll contact you soon to confirm.</p>
          </div>
          <button (click)="showSuccess = false" class="ml-4 text-white hover:text-gray-200">✕</button>
        </div>
      </div>
    </div>
  `
})
export class App {
  showBooking = false;
  showSuccess = false;
  
  booking = {
    name: '',
    email: '',
    phone: '',
    datetime: ''
  };

  services = [
    {
      icon: '❤️',
      name: 'Cardiac Consultation',
      description: 'Comprehensive heart health evaluation and diagnosis',
      price: '$200 - $300'
    },
    {
      icon: '🔬',
      name: 'Echocardiography',
      description: 'Advanced ultrasound imaging of the heart',
      price: '$150 - $250'
    },
    {
      icon: '📊',
      name: 'Stress Testing',
      description: 'Exercise and pharmacological stress tests',
      price: '$300 - $400'
    },
    {
      icon: '🩺',
      name: 'EKG/ECG',
      description: 'Electrocardiogram for heart rhythm analysis',
      price: '$75 - $125'
    },
    {
      icon: '💊',
      name: 'Cardiac Catheterization',
      description: 'Minimally invasive diagnostic procedure',
      price: '$1500 - $3000'
    },
    {
      icon: '🏥',
      name: 'Angioplasty',
      description: 'Coronary artery intervention and stent placement',
      price: '$5000 - $15000'
    }
  ];

  availableTimes = [
    {
      day: 'Monday',
      times: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM']
    },
    {
      day: 'Tuesday',
      times: ['8:30 AM', '11:00 AM', '1:30 PM', '4:00 PM']
    },
    {
      day: 'Wednesday',
      times: ['9:30 AM', '11:30 AM', '2:30 PM', '4:30 PM']
    },
    {
      day: 'Thursday',
      times: ['8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM']
    }
  ];

  selectTime(day: string, time: string) {
    console.log(`Selected: ${day} at ${time}`);
    this.showBooking = true;
  }

  bookAppointment() {
    console.log('Booking:', this.booking);
    this.showBooking = false;
    this.showSuccess = true;
    
    // Reset form
    this.booking = { name: '', email: '', phone: '', datetime: '' };
    
    // Auto-hide success message
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }
}

bootstrapApplication(App);