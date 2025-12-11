// Temporary page to verify environment variables in production
// Delete this file after verification

export default function EnvTest() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Environment Variable Test</h1>

        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">NEXT_PUBLIC_BOOKING_URL</h2>

          {bookingUrl ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-green-600 font-medium">Variable is set</span>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Value:</p>
                <code className="text-blue-600 font-mono">{bookingUrl}</code>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-3">Test button:</p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Click to test → Should open {bookingUrl}
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-red-600 text-2xl">✗</span>
                <span className="text-red-600 font-medium">Variable is NOT set</span>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Action required:</strong> Set NEXT_PUBLIC_BOOKING_URL in Vercel dashboard
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <p className="text-sm text-yellow-800 font-semibold mb-2">Steps to fix:</p>
                <ol className="text-sm text-yellow-800 space-y-1 list-decimal list-inside">
                  <li>Go to Vercel Dashboard → Project Settings</li>
                  <li>Navigate to Environment Variables</li>
                  <li>Add: NEXT_PUBLIC_BOOKING_URL = https://ld.xperiencewave.com</li>
                  <li>Select all environments (Production, Preview, Development)</li>
                  <li>Save and redeploy</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Expected Value:</h3>
          <code className="text-blue-700 font-mono">https://ld.xperiencewave.com</code>

          <p className="text-sm text-blue-800 mt-4">
            After fixing, all "Book a strategy call" buttons across the site should work correctly.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This is a temporary test page.</p>
          <p>Delete <code className="bg-gray-100 px-2 py-1 rounded">/src/app/env-test/page.tsx</code> after verification.</p>
        </div>
      </div>
    </main>
  )
}
