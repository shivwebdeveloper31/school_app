export default function StudentDashboard({ user }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Student Dashboard
        </h2>

        <div className="space-y-4">
          <InfoRow label="Name" value={user.username} />
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Language" value={user.language} />
          <InfoRow label="Address" value={user.address} />
          <InfoRow label="Standard" value={user.standard} />
          <InfoRow label="Subjects" value={user.subjects.join(", ")} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
