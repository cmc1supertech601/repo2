"use client";

export default function ContactForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">Name</label>
                <input type="text" id="name" className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-700">Phone</label>
                <input type="tel" id="phone" className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Phone Number" />
            </div>
            <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700">Message</label>
                <textarea id="message" rows={3} className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                Send Request
            </button>
        </form>
    );
}
