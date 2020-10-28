# Data Security 

## Purpose

The purpose of this policy is to provide guidance on the use of technologies as they result in data security. This applies to both the storage and transmission of data between endpoints, as well as people.

## Scope

This policy applies to all Sourcegraph employees, and any third-party that creates, deploys, transmits or supports application and system software, as well as customer information. This policy addresses controls for Information regardless of confidentiality or Personally Identifiable Information (PII) that is at rest, in motion, and encryption key standards and management. These policies apply to endpoints that store, process, or interact with customer data in any way.

## Policies

### Employee requirements

Hard drives and removable media may be vulnerable to security beaches from the decrypted to encrypted region. This includes physical attacks whereby an attacker is able to access the physical media itself. As such employees are required to deploy the following technologies to computing and mobile devices:

* Deploy full disk encryption (e.g.. Bitlocker, FileVault, or EncFS), requiring a password to unlock.

* Ensure computers and mobile devices require a login using a password.

* Deploy screensaver or screen lockers with an automatic, time-based lock, requiring a password to unlock.

* Any and all systems with support for two-factor authentication must have said authentication enabled.

### Data access

Data users must responsibly make use of data for which they have access. Data should only be used for its intended purpose, while maintaining the privacy of both users and clients.

* By default a policy of less privileged access is granted to employees

* Applications reduce data access to the minimum on a per process, or per response basis.

* Enhanced data access to data requires approvals.

* Customer data, but not customer names, shall be internally treated as sensitive and will be encrypted at transport, and stored encrypted at rest.

* Authorized access does not imply authorization for copying or dissemination.

### In transit encryption

Transit policies and controls are implemented to protect the transfer of information through the use of any and all types of communication. At all times strong cryptographic and security protocols (i.e TLS, SSH) are used to safeguard information during transmission.

* Transmission of cryptographic keys is always encrypted.

* Transmission of a decryption key is transmitted across a separate communications channel from the data being decrypted.

### At-rest encryption

* Information stored at rest on computer systems is stored encrypted. 

* Firewalls with access controls ensure the identity of individuals access stored information.

* Strong cryptography on credentials shall be made unreadable during transmission and storage, across information systems.

* Password protection of accounts is used in conjunction with security keys for service access.

### Encryption key management

Encryption key management is a key element in ensuring system security. Key management procedures ensure that authorized users and services can access and decrypt information as needed, while meeting operational needs. Key management is characterized by the following precautions and attributes:

* Cryptographic keys are encrypted in storage and transmission.

* Cryptographic keys are stored in the fewest possible locations.

* Access to cryptographic keys is restricted to the fewest number of custodians necessary.

* Remote transmission of cryptographic keys occurs between encrypted endpoints.

* Retirement or replacement (i.e revocation, rotation, or destruction) of cryptographic keys occurs when the suspect of compromise, leakage, or weakening has occurred.