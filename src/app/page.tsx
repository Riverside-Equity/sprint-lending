"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function HomePage() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [termMonths, setTermMonths] = useState(12);

  const monthlyPayment = ((loanAmount * (interestRate / 100)) / 12).toFixed(2);
  const totalPayment = (Number(monthlyPayment) * termMonths).toFixed(2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("https://formsubmit.co/brooke.naghavi@riverside-equity.com", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hard Money Loans for Real Estate Investors
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Fast. Professional. Efficient. Funds in as little as 3 days.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="text-lg px-6 py-3 bg-white text-blue-900">Apply Now</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-white text-white">
            Use Loan Calculator
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 max-w-7xl mx-auto">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Bridge Loans</h2>
            <p>Short-term funding for investors needing fast closings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Fix & Flip Loans</h2>
            <p>Perfect for rehabbers needing capital for renovations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Rental Property Loans</h2>
            <p>Finance long-term holds or BRRRR deals with ease.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Loan Calculator</h2>
          <p className="mb-6">Estimate your monthly and total loan costs.</p>
          <div className="grid gap-4 max-w-md mx-auto">
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan Amount"
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              placeholder="Annual Interest Rate (%)"
            />
            <Input
              type="number"
              value={termMonths}
              onChange={(e) => setTermMonths(+e.target.value)}
              placeholder="Term (Months)"
            />
            <div className="text-left">
              <p><strong>Estimated Monthly Payment:</strong> ${monthlyPayment}</p>
              <p><strong>Total Cost of Loan:</strong> ${totalPayment}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="mb-6">We make hard money lending simple. Here&rsquo;s what to expect:</p>

          <ul className="text-left max-w-xl mx-auto space-y-2 list-disc list-inside">
            <li>Submit a short application</li>
            <li>Get a quote within 24 hours</li>
            <li>Close in as little as 3 days</li>
            <li>Draw funds for rehab or property acquisition</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Apply for a Loan</h2>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <Input name="Full Name" placeholder="Full Name" required />
          <Input name="Email" placeholder="Email Address" type="email" required />
          <Input name="Phone" placeholder="Phone Number" type="tel" required />
          <Textarea
            name="Message"
            placeholder="Tell us about your deal (location, purchase price, rehab needs, etc.)"
            rows={5}
            required
          />
          <Button type="submit" className="w-full text-lg">Submit Application</Button>
        </form>
      </section>

      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sprint Lending. All rights reserved.</p>
      </footer>
    </main>
  );
}
