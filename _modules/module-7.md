---
title: "Sampling Design and Data Collection"
module_number: 7
author: "Vivek H. Patil, Ph.D."
institution: "Gonzaga University"
subtitle: "Probability and non-probability sampling, sample size determination, and data collection strategies."
learning_objectives:
  - "Explain when a census is appropriate vs. when sampling is preferred"
  - "Walk through the steps of the sampling process from defining the target population to executing selection"
  - "Distinguish between probability and non-probability sampling methods and their appropriate uses"
  - "Compare simple random, systematic, stratified, and cluster sampling designs"
  - "Compare judgmental, snowball, convenience, and quota sampling designs"
  - "Calculate sample size using statistical formulas and apply ad hoc methods"
  - "Identify sources of sampling and non-sampling error"
discussion_questions:
  - "A national restaurant chain wants to survey its customers about a proposed menu change. Design a sampling plan: What is the target population? What sampling frame would you use? What sampling method would you recommend, and why? How would you determine the sample size?"
  - "Under what circumstances is a non-probability sample not only acceptable but actually preferable to a probability sample? Provide at least two specific business scenarios."
  - "A researcher finds that the required sample size for a study is 1,500 but the budget only allows for 600 respondents. What are the researcher's options? What are the trade-offs of each option?"
  - "Consider the ethical dimension of sampling. When a study systematically excludes certain populations (e.g., non-English speakers, rural communities, low-income individuals without internet access), what are the consequences? How does the Jesuit commitment to justice inform our approach to inclusive sampling?"
---

## 7.1 Census vs. Sample

A fundamental choice in any research study is whether to collect data from **every member** of the target population (a **census**) or from a **subset** (a **sample**). Each approach has its place.

### When a Census Is Appropriate
- The population is small enough that surveying everyone is feasible
- Information is needed from every individual (e.g., a mandatory employee survey)
- The cost of an incorrect decision is very high, warranting maximum data
- Sampling error must be eliminated entirely

### When Sampling Is Preferred
- The population is large, making a census impractical
- Cost and time constraints limit data collection
- A quick decision is needed and sampling is faster
- A sample actually allows **more time per respondent**, potentially improving data quality
- Smaller samples are easier to manage with better quality control
- The population is relatively **homogeneous**, so a sample adequately represents the whole

In practice, the vast majority of business research uses samples rather than censuses. The key question is not whether to sample, but **how** to sample well.

## 7.2 The Sampling Process

The sampling process involves a series of sequential decisions (adapted from Churchill & Iacobucci, 2015):

1. **Define the target population** — Who are we studying?
2. **Identify the sampling frame** — What list or source will we use to access the population?
3. **Select a sampling procedure** — How will we choose individuals from the frame?
4. **Determine the sample size** — How many individuals do we need?
5. **Select the sample members** — Execute the sampling plan
6. **Collect the data** — Gather information from the selected sample

Each step involves critical decisions that affect the quality and generalizability of the research.

### Step 1: Defining the Target Population

The target population must be defined with precision:
- Consider all alternatives: Should the population be current customers, potential customers, or both?
- Know your market: Geographic, demographic, and behavioral boundaries
- Consider the appropriate **sampling unit**: The entity actually being sampled (individual, household, organization, store)
- Specify clearly what is excluded
- The definition should be **reproducible**: Another researcher should be able to identify the same population

### Step 2: Identifying the Sampling Frame

The **sampling frame** is the actual list or mechanism from which sample members are drawn. Common sampling frames include customer databases, voter registration lists, telephone directories, employee rosters, and membership lists.

A critical issue is the **mismatch** between the target population and the sampling frame:
- The frame may be a **subset** of the population (e.g., a phone directory excludes unlisted numbers)
- The frame may be a **superset** (e.g., a mailing list includes people who are no longer customers)
- The frame may only partially **intersect** with the population

Understanding and managing this mismatch is essential for research quality.

## 7.3 Non-Probability Sampling

In **non-probability sampling**, the probability of any particular individual being selected is unknown. While this limits the ability to generalize findings statistically, non-probability methods are widely used when probability sampling is impractical, too expensive, or unnecessary.

### Types of Non-Probability Sampling

| Method | Description | When to Use |
|---|---|---|
| **Judgmental (Purposive)** | An expert uses judgment to select individuals who are believed to represent the population. Participants are hand-picked because they serve the research purpose. | When expert knowledge can identify the most informative participants; early-stage exploratory research |
| **Snowball** | Initial respondents refer the researcher to others, who refer still others, creating a chain. | When reaching small, specialized, or hidden populations (e.g., luxury brand users, niche B2B executives) |
| **Convenience** | Individuals are selected simply because they are accessible and willing. | Quick preliminary studies; pretesting questionnaires; when speed is critical and generalizability is not |
| **Quota** | Minimum numbers of respondents are selected from specified subgroups, often based on demographic characteristics. | When the researcher wants to ensure representation of key subgroups without the cost of probability sampling |

### Limitations of Non-Probability Sampling
- Results cannot be generalized to the broader population with statistical confidence
- Selection bias is inherent—certain types of individuals are systematically more or less likely to be included
- Sampling error cannot be estimated

## 7.4 Probability Sampling

In **probability sampling**, every member of the target population has a **known, non-zero probability** of being selected. This enables the researcher to estimate sampling error and generalize findings to the broader population.

### Simple Random Sampling (SRS)
Each population member, and each possible sample of a given size, has an **equal probability** of being selected. This is the gold standard of sampling—conceptually simple and the basis for most statistical theory.

- **Implementation**: Assign each member a number; use a random number generator to select the sample
- **Advantage**: Eliminates selection bias; supports full range of statistical analyses
- **Limitation**: Requires a complete list of the population; can be expensive for geographically dispersed populations

### Systematic Sampling
Involves selecting every *k*th member from a list, after a random starting point. For example, if the population has 10,000 members and the desired sample size is 500, select every 20th member (k = 10,000 / 500 = 20).

- **Advantage**: Simpler to implement than SRS; spreads the sample evenly across the list
- **Limitation**: If the list has a periodic pattern that coincides with the sampling interval, the sample may be biased
- **Common use**: Telephone surveys, customer lists

## 7.5 Stratified and Cluster Sampling

### Stratified Sampling
The population is divided into **strata** (subgroups) based on a relevant characteristic, and a separate random sample is drawn from each stratum. This ensures representation of all subgroups.

**Proportionate stratified sampling**: The sample from each stratum is proportional to the stratum's share of the population. If women are 60% of the population, they constitute 60% of the sample.

**Disproportionate stratified sampling**: The sample from each stratum is **not** proportional to its population share. This is useful when certain subgroups are small but analytically important—disproportionate sampling ensures enough cases for meaningful comparison.

### Cluster Sampling
The population is divided into **clusters** (often geographic), and a random sample of clusters is selected. Then, all members (or a random sample of members) within the selected clusters are studied.

### Stratified vs. Cluster: A Critical Comparison

| Dimension | Stratified Sampling | Cluster Sampling |
|---|---|---|
| **Within-group composition** | Homogeneous (members within each stratum are similar) | Heterogeneous (members within each cluster are diverse) |
| **Between-group composition** | Heterogeneous (strata differ from each other) | Homogeneous (clusters resemble each other) |
| **Groups used** | All strata are represented | Only selected clusters are studied |
| **Efficiency logic** | Increases accuracy at a faster rate than it increases cost | Decreases cost at a faster rate than it decreases accuracy |
| **Best for** | Improving precision when subgroups differ on the variable of interest | Reducing cost when the population is geographically dispersed |

## 7.6 Determining Sample Size

### Factors Influencing Sample Size
- **Number of subgroups**: More subgroups require larger total samples (each subgroup needs sufficient cases)
- **Value of information**: Higher-stakes decisions warrant larger, more precise samples
- **Required accuracy**: Tighter confidence intervals demand larger samples
- **Population variability**: More heterogeneous populations require larger samples
- **Budget**: Available resources constrain feasible sample sizes

### Statistical Approach

The fundamental formula for determining sample size (for estimating a population mean) is:

**n = (Z² × s²) / E²**

Where:
- **n** = required sample size
- **Z** = z-value corresponding to the desired confidence level (e.g., 1.96 for 95% confidence)
- **s** = estimated population standard deviation
- **E** = desired margin of error (maximum acceptable sampling error)

### Estimating the Standard Deviation

The formula requires an estimate of the population standard deviation (s), which the researcher may not know in advance. Options include:
- **Past studies**: If the study replicates or extends prior research, use the standard deviation from that research
- **Pilot study**: Conduct a small preliminary study using non-probability sampling to estimate variability
- **Range estimation**: Estimate the range of variation using prior knowledge and divide by 6 (assuming a roughly normal distribution, the range covers about 6 standard deviations)

<div class="callout callout-example">
<p class="callout-title">Interactive Tool: Gonzaga Sampling Simulator</p>
<p>To build your intuition for how different sampling methods, sample sizes, and population distributions affect results, use the <strong><a href="https://analytics.gonzaga.edu/sampling/" target="_blank" rel="noopener noreferrer">Gonzaga Sampling Simulator</a></strong>. This interactive app lets you configure populations, apply different sampling methods, visualize sampling distributions, and explore sample size calculators for margin of error, proportions, group comparisons, and budget analysis. Experiment with different settings to see firsthand how sampling decisions affect precision and bias.</p>
</div>

### Ad Hoc Methods

When formal statistical methods are impractical, researchers use ad hoc approaches (Churchill & Iacobucci, 2015):

- **Rules of thumb**: The sample should be large enough that when divided into subgroups, each group has at least 100 cases. For subgroup comparisons, each subgroup should have at least 20–50 cases.
- **Budget constraints**: Work backward from the available budget to determine the feasible sample size, then assess whether that size permits a worthwhile study.
- **Comparable studies**: Review similar studies and use their sample sizes as benchmarks.

<div class="callout callout-example">
<p class="callout-title">Sample Size Calculation Example</p>
<p>A retailer wants to estimate average customer spending per visit with 95% confidence and a margin of error of $5. Past data suggest the standard deviation of spending is approximately $30.</p>
<p><strong>n = (1.96² × 30²) / 5² = (3.8416 × 900) / 25 = 3,457.44 / 25 ≈ 139</strong></p>
<p>The retailer needs a sample of approximately 139 customers. Note how a larger standard deviation or a tighter margin of error would increase the required sample size.</p>
</div>

## 7.7 Sampling and Non-Sampling Errors

It is crucial to distinguish between two types of errors that affect research quality:

**Sampling error** is the difference between a sample statistic and the true population parameter, arising simply because a sample (rather than a census) was used. Sampling error can be estimated and controlled through proper sampling design and adequate sample size.

**Non-sampling error** encompasses all other errors: measurement error, non-response error, data entry errors, interviewer bias, respondent errors, and processing mistakes. Non-sampling errors are often **more dangerous** than sampling errors because they are harder to detect and cannot be reduced simply by increasing sample size.

Sources of error include (adapted from Cox & Enis, 1972; Bellenger & Greenberg, 1978):
- **Sampling frame errors**: The frame does not accurately represent the target population
- **Selection errors**: The sampling procedure is not followed correctly
- **Non-response errors**: Selected individuals do not participate
- **Response errors**: Participants provide inaccurate answers
- **Data processing errors**: Mistakes in coding, entry, or analysis

<div class="callout callout-jesuit">
<p class="callout-title">Jesuit Perspective</p>
<p>The Jesuit commitment to justice demands that we consider <strong>who is represented in our samples and who is excluded</strong>. When sampling methods systematically exclude certain populations—those without internet access, non-English speakers, people in poverty, individuals with disabilities—the resulting data reflect only a partial truth. Research that claims to represent "consumers" or "employees" but excludes marginalized groups perpetuates inequality by making those groups invisible in the evidence base that informs business decisions. Inclusive sampling is not just methodologically sound; it is ethically imperative.</p>
</div>

## 7.8 Managing the Data Collection Process

Even the best sampling plan and questionnaire can fail if data collection is poorly managed. Key considerations include:

- **Interviewer training**: Ensure interviewers understand the protocol, can probe appropriately, and maintain neutrality
- **Supervision and quality control**: Monitor data collection in real time; check for interviewer fabrication, incomplete responses, and systematic errors
- **Response rate tracking**: Monitor response rates across subgroups and geographic areas; deploy additional follow-up efforts where response is low
- **Data security**: Protect respondent data from unauthorized access, especially for sensitive information
- **Documentation**: Maintain a complete record of data collection procedures, problems encountered, and decisions made—this is essential for assessing data quality and replicating the study

---

## Recommended Resources

### Academic Texts
- Zikmund, W. G., Babin, B. J., Carr, J. C., & Griffin, M. (2013). *Business Research Methods* (9th ed.). Cengage Learning. — Chapters 12–14.
- Churchill, G. A., & Iacobucci, D. (2015). *Marketing Research: Methodological Foundations*. Cengage Learning. — Chapters 13–14.
- Lohr, S. L. (2022). *Sampling: Design and Analysis* (3rd ed.). Chapman & Hall/CRC.
- Cox, K. K., & Enis, B. M. (1972). *The Marketing Research Process*. Goodyear Publishing.
- Bellenger, D. N., & Greenberg, B. A. (1978). *Marketing Research: A Management Information Approach*. Irwin.

### Interactive Tools
- **Gonzaga Sampling Simulator** — An interactive app for exploring sampling methods (simple random, stratified, cluster, systematic, multi-stage, PPS, adaptive, and bootstrap), visualizing sampling distributions, calculating sample sizes, and conducting power analysis: [analytics.gonzaga.edu/sampling/](https://analytics.gonzaga.edu/sampling/)

### Online Resources
- Pew Research Center: Sampling Methods — [www.pewresearch.org/methods](https://www.pewresearch.org/methods/)
- Qualtrics: Sample Size Calculator — [www.qualtrics.com/blog/calculating-sample-size/](https://www.qualtrics.com/blog/calculating-sample-size/)

### Companion Resource
- Patil, V. H. (2024). *Notes on Survey Design*, Chapter 4: Sampling — [patilv.com/Survey-Design/chapters/chapter-4/](https://patilv.com/Survey-Design/chapters/chapter-4/)
