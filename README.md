 # Genomic Cosmos — AWS DynamoDB Database

A cloud database project that traces the scientific chain from the 
birth of the universe all the way to human DNA, built on Amazon Web Services.

## What This Project Does

This database stores three interconnected layers of scientific data:

- **Cosmic Layer** — Chemical elements forged inside dying stars through 
stellar nucleosynthesis (hydrogen, carbon, nitrogen, oxygen, phosphorus)

- **Atomic Layer** — Molecules assembled from those star-forged elements 
(water, phosphate, deoxyribose, ammonia)

- **DNA Layer** — The four nucleotide bases that encode all genetic 
information (Adenine, Thymine, Guanine, Cytosine)

The core idea: the same carbon forged in a supernova billions of years 
ago is sitting in your DNA right now. This database makes that chain 
queryable and explorable.

## Cloud Architecture

- **Database:** Amazon DynamoDB (NoSQL, serverless, on-demand)
- **Cloud Provider:** Amazon Web Services (AWS)
- **Region:** us-east-2
- **Table:** genomic-cosmos
- **Design:** Single-table design with partition key (PK) and sort key (SK)
- **Runtime:** Node.js with AWS SDK v3

## Project Structure

## Data Model

Each record uses a two-key system:

| Field | Description | Example |
|-------|-------------|---------|
| PK | Layer identifier | COSMIC, ATOMIC, DNA |
| SK | Unique entity ID | element#carbon, base#adenine |

## How To Run This Project

1. Clone the repository
2. Run `npm install`
3. Add your AWS credentials to a `.env` file
4. Run `node src/seed.js`

## About This Project

This is part of the Genomic Cosmos research concept — a transdisciplinary 
exploration connecting cosmology, atomic chemistry, genomics, and health 
informatics. The same data architecture is mirrored on Microsoft Azure 
using Cosmos DB, demonstrating multi-cloud database skills.

**Related project:** [Azure Genomics Research Platform](https://github.com/IT-Professional-Kristina/azure-genomics-research-platform)

## Author

Kristina Ankrah — Healthcare IT Professional & Pharmacy Technician  
12+ years clinical experience | Epic EHR | AWS | Azure | Node.js