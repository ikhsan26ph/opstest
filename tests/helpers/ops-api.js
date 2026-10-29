// Pembacaan konfigurasi observasi (system/status) — terpisah dari UI fitur yang diuji.
async function fetchSystemStatus(apiBaseUrl, { timeoutMs = 15_000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${apiBaseUrl}/system/status`, { signal: ctrl.signal, headers: { accept: 'application/json' } });
    const body = await res.json().catch(() => null);
    return { at: new Date().toISOString(), httpStatus: res.status, data: body && body.data ? body.data : null };
  } catch (e) {
    return { at: new Date().toISOString(), httpStatus: null, error: e.name === 'AbortError' ? 'timeout' : e.message, data: null };
  } finally {
    clearTimeout(timer);
  }
}

// Ringkasan aman untuk report (tanpa data sensitif).
function summarizeStatus(s) {
  if (!s || !s.data) return { httpStatus: s && s.httpStatus, error: s && s.error };
  const d = s.data;
  return {
    httpStatus: s.httpStatus, at: s.at, appEnv: d.appEnv, maintenanceMode: d.maintenanceMode,
    expired: d.expired, paymentOverdue: d.paymentOverdue, products: d.products,
    productSource: d.productSource, addOns: d.addOns, features: d.features,
  };
}

module.exports = { fetchSystemStatus, summarizeStatus };
