# Coverage tiga case SLA

9 checks:1passed,5failed,3blocked. Satu temuan SLA-FND-01 terkonfirmasi pada ketiga case. PassedSCN-0008 hanya kontinuitas MP2, bukan ketepatan origin.

|Requirement|Skenario|Hasil|
|---|---|---|
|REQ-001 Normal|SCN-0001–0003|2failed,1blocked|
|REQ-002 MP1kota|SCN-0004–0006|2failed,1blocked|
|REQ-003 MPbedaKota|SCN-0007–0009|1failed,1passed(continuity),1blocked|

Finalcap terblok output final sistem. Multidrop/Multipoint, >2kota, role lain, DriverHub, lintaslayanan dan boundarySLA1jam tidak dieksekusi.
