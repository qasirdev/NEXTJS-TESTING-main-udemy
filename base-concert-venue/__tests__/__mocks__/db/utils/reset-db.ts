import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

export const resetDB = async () => {
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset unavailable outsid test environment");
    return;
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();
  
  // overwirte data
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
    writeJSONToFile(filenames.shows, fakeShows),
  ]);
};
