import {
  act,
  beforeEach,
  describe,
  expect,
  it,
  renderHook,
  vi,
  waitFor,
} from "@/test/test-utils";
import { AuthProvider, useAuth } from "./AuthContext";
import { account } from "@/lib/appwrite";

describe("AuthContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with loading true and user null", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.user).toBe(null);
  });

  it("should set user when session exists on mount", async () => {
    const mockUser = { $id: "123", email: "test@test.com" } as IUser;
    vi.mocked(account.get).mockResolvedValue(mockUser as any);

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(account.get).toHaveBeenCalledTimes(1);
  });

  it("should use default context values when used outside provider", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(typeof result.current.login).toBe("function");
    expect(typeof result.current.logout).toBe("function");
  });
  it("should handle login with correct parameters", async () => {
    const mockUser = { $id: "123", email: "test@test.com" } as any;
    vi.mocked(account.get).mockResolvedValueOnce(null as any);
    vi.mocked(account.createEmailPasswordSession).mockResolvedValue(
      null as any
    );
    vi.mocked(account.get).mockResolvedValueOnce(mockUser as any);

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.login("user@test.com", "pass123");
    });

    expect(account.createEmailPasswordSession).toHaveBeenCalledWith({
      email: "user@test.com",
      password: "pass123",
    });
    expect(result.current.user).toEqual(mockUser);
  });

  it("should clear user on logout", async () => {
    const mockUser = { $id: "123", email: "test@test.com" } as any;
    vi.mocked(account.get).mockResolvedValue(mockUser as any);
    vi.mocked(account.deleteSession).mockResolvedValue(null as any);

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await waitFor(() => expect(result.current.user).toEqual(mockUser));

    await act(async () => {
      await result.current.logout();
    });

    expect(account.deleteSession).toHaveBeenCalledWith("current");
    expect(result.current.user).toBe(null);
  });
});
