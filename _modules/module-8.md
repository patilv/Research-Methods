---
title: "Data Analysis, Interpretation, and Reporting"
module_number: 8
author: "Vivek H. Patil, Ph.D."
institution: "Gonzaga University"
subtitle: "Hypothesis testing, key statistical tests, cross-tabulation, and presenting research findings that drive action."
learning_objectives:
  - "Explain the logic of hypothesis testing, including null and alternative hypotheses, Type I and Type II errors, and statistical significance"
  - "Conduct and interpret chi-square tests (goodness of fit and test of independence)"
  - "Conduct and interpret one-sample and two-sample t-tests"
  - "Conduct and interpret one-factor Analysis of Variance (ANOVA)"
  - "Construct and interpret cross-tabulations"
  - "Apply the appropriate statistical test for a given research question and data type"
  - "Prepare a professional research report that communicates findings and actionable recommendations"
discussion_questions:
  - "A company finds that its customer satisfaction score has changed from 4.2 to 4.0 (on a 5-point scale) year over year. Is this change 'significant'? Discuss both statistical significance and practical significance. Under what conditions might a statistically significant change be practically unimportant—and vice versa?"
  - "You have been asked to present the findings of a major research project to the executive team. They are busy, non-technical, and primarily interested in actionable recommendations. How would you structure your presentation? What would you include and what would you leave out?"
  - "Consider the judicial analogy for hypothesis testing: just as a court presumes innocence until proven guilty, the researcher presumes the null hypothesis until evidence convinces otherwise. What are the implications of this framework? How does the standard of evidence (significance level) relate to the concept of 'reasonable doubt'?"
  - "Reflect on the full research process you have studied in this course—from problem formulation through data analysis and reporting. Which stage do you now believe is most critical for producing research that genuinely informs good decisions? How has your understanding of research methods changed over the past eight weeks?"
---

## 8.1 Data Preparation and Cleaning

Before any analysis can begin, raw data must be **prepared and cleaned**. This often-underestimated step can consume a substantial portion of the analyst's time, but it is essential for producing trustworthy results.

Key tasks in data preparation include:

- **Editing**: Checking individual responses for completeness, consistency, and legibility. Identifying and handling incomplete or contradictory responses.
- **Coding**: Assigning numeric codes to responses, particularly for open-ended questions. Developing a codebook that documents each variable, its codes, and any transformation rules.
- **Data entry and verification**: Entering data into the analysis system and verifying accuracy through double-entry, range checks, and logical consistency checks.
- **Handling missing data**: Deciding how to treat responses where data are missing—through listwise deletion, pairwise deletion, mean imputation, or more sophisticated methods.
- **Data transformation**: Creating new variables, recoding existing ones, or computing composite scores (e.g., averaging Likert items to create a scale score).

<div class="callout callout-warning">
<p class="callout-title">Data Quality First</p>
<p>No amount of sophisticated analysis can compensate for dirty data. The maxim "garbage in, garbage out" applies with full force. Before running any statistical test, examine your data: check distributions, look for outliers, verify that codes are correct, and ensure that missing data are handled appropriately.</p>
</div>

## 8.2 The Logic of Hypothesis Testing

**Hypothesis testing** is a formal statistical procedure for making decisions about population parameters based on sample data. It is the primary tool for drawing inferences from quantitative research.

### The Judicial Analogy

The logic of hypothesis testing closely parallels the logic of a court trial:

| Court of Law | Hypothesis Testing |
|---|---|
| The defendant is presumed innocent | The null hypothesis (H₀) is presumed true |
| The prosecution must present evidence of guilt | The researcher must present evidence against H₀ |
| "Guilty" verdict if evidence is beyond reasonable doubt | Reject H₀ if evidence exceeds the significance threshold |
| "Not guilty" does not mean proven innocent—just insufficient evidence | "Fail to reject H₀" does not mean H₀ is true—just insufficient evidence |

### Decision Errors

Two types of errors are possible:

| | H₀ Is Actually True | H₀ Is Actually False |
|---|---|---|
| **Fail to Reject H₀** | Correct decision (probability = 1 − α) | **Type II Error** (probability = β): Failing to detect a real effect |
| **Reject H₀** | **Type I Error** (probability = α): Concluding there is an effect when there is none | Correct decision / **Power** (probability = 1 − β) |

- **α (alpha)** is the **significance level**—the probability of a Type I error that the researcher is willing to accept. Common values are 0.05 and 0.01.
- **β (beta)** is the probability of a Type II error.
- **Power (1 − β)** is the probability of correctly detecting a real effect. A good test should have high power.

### The Hypothesis Testing Procedure

1. Define the problem clearly
2. State the null hypothesis (H₀) and alternative hypothesis (Hₐ)
3. Choose the appropriate test and probability distribution
4. Set the significance level (α)
5. Determine the degrees of freedom
6. Decide whether to use a one-tailed or two-tailed test
7. Find the critical value from the relevant statistical table
8. Compute the test statistic from the data
9. Compare the test statistic to the critical value
10. Make a decision: reject H₀ or fail to reject H₀

### Three Criteria for Test Selection

The choice of statistical test depends on:
- **Significance level (α)**: How much Type I error risk is acceptable?
- **Degrees of freedom**: Related to sample size and the number of groups or categories
- **Directionality**: Is the test one-tailed (testing for an effect in a specific direction) or two-tailed (testing for an effect in either direction)?

## 8.3 Chi-Square Tests

The **chi-square (χ²) test** is used when the variables being analyzed are **nominal** (categorical). It compares observed frequencies to expected frequencies under the null hypothesis.

### Chi-Square Goodness of Fit Test
Tests whether an observed frequency distribution differs from a hypothesized distribution.

**Example**: If we hypothesize that sophomores, juniors, and seniors are equally likely to own Hondas, and we observe a different distribution, is the difference statistically significant?

- H₀: The observed distribution matches the presumed distribution
- Hₐ: The observed distribution differs from the presumed distribution

### Chi-Square Test of Independence
Tests whether two categorical variables are independent of each other.

**Example**: Is there a relationship between gender and guilt level?

| | High Guilt | Low Guilt |
|---|---|---|
| Male | 50 | 10 |
| Female | 10 | 50 |

- H₀: There is no relationship between gender and guilt
- Hₐ: There is a relationship between gender and guilt

### Computing Chi-Square

The chi-square statistic is calculated as:

**χ² = Σ [(Oᵢ − Eᵢ)² / Eᵢ]**

Where:
- Oᵢ = observed frequency in cell i
- Eᵢ = expected frequency in cell i (computed as: row total × column total / grand total)
- Degrees of freedom: (r − 1)(c − 1), where r = number of rows and c = number of columns

### Step-by-Step Procedure
1. Formulate hypotheses
2. Calculate row and column totals
3. Calculate expected frequencies
4. Compute chi-square statistic
5. Determine degrees of freedom
6. Obtain critical value from chi-square table
7. Compare test statistic to critical value
8. Make decision regarding H₀

<div class="callout callout-example">
<p class="callout-title">Worked Example: Grades and Class Section</p>
<p>A researcher wants to know if grade distributions differ between two class sections. Data show grades A through E for Class 1 and Class 2.</p>
<p>H₀: Grade and class section are not related. Hₐ: Grade and class section are related.</p>
<p>After computing expected frequencies and the chi-square statistic: χ² = 5.136, df = 4, α = 0.05.</p>
<p>Critical value from chi-square table: 9.49. Since 5.136 < 9.49, we <strong>fail to reject H₀</strong>. There is insufficient evidence to conclude that grade distributions differ between sections.</p>
</div>

## 8.4 t-Tests

The **t-test** is used to compare means when the variable of interest is measured at the interval or ratio level. There are two main variants:

### One-Sample t-Test
Tests whether a sample mean differs significantly from a hypothesized population mean.

**Example**: A soft drink manufacturer claims average weekly sales of 1,000 cases per supermarket. A sample of 12 supermarkets shows a mean of 1,087.1 cases with a standard deviation of 191.6.

- H₀: μ = 1,000
- Hₐ: μ ≠ 1,000

The test statistic: **t = (X̄ − μ₀) / (s / √n)** = (1,087.1 − 1,000) / (191.6 / √12) = 87.1 / 55.31 = **1.57**

With df = 11 and α = 0.01 (two-tailed), the critical value is 3.106. Since |1.57| < 3.106, we **fail to reject H₀**.

### Two-Sample t-Test
Tests whether the means of two groups differ significantly.

**Example**: Is the proportion of stores open 24 hours different between Chain A and Chain B?

| Chain | n | Proportion Open 24 Hours |
|---|---|---|
| A | 40 | 0.45 |
| B | 75 | 0.40 |

- H₀: p_A = p_B
- Hₐ: p_A ≠ p_B

The test uses a weighted average of the sample proportions and a z-test (or t-test with large samples). With df = 113 and α = 0.05, the critical values are ±1.96.

### One-Tailed vs. Two-Tailed Tests

- **Two-tailed test**: "Is there a difference?" (H₁: μ ≠ μ₀) — rejection region split between both tails
- **One-tailed test**: "Is it greater than?" or "Is it less than?" (H₁: μ > μ₀ or μ < μ₀) — rejection region in one tail only

Use a one-tailed test only when theory or prior evidence provides a strong directional prediction.

## 8.5 Analysis of Variance (ANOVA)

When comparing means across **three or more groups**, the appropriate technique is **Analysis of Variance (ANOVA)**. ANOVA tests whether at least one group mean differs significantly from the others.

### Core Logic

ANOVA compares two sources of variation:
- **Between-group variance** (treatment effect): How much do group means differ from the overall mean?
- **Within-group variance** (error): How much do individual observations vary within each group?

If the between-group variance is large relative to the within-group variance, it suggests that the groups genuinely differ. The test statistic is the **F-ratio**:

**F = Between-group variance (MSSr) / Within-group variance (MSSu)**

### ANOVA Table

| Source | Sum of Squares (SS) | df | Mean Square (MS) | F |
|---|---|---|---|---|
| Between groups | SSr | r − 1 | MSSr = SSr / (r − 1) | MSSr / MSSu |
| Within groups | SSu | n − r | MSSu = SSu / (n − r) | |
| Total | SSt | n − 1 | | |

Where r = number of groups and n = total sample size.

<div class="callout callout-example">
<p class="callout-title">Worked Example: Price Experiment</p>
<p>A company tests product sales at three price points (39¢, 44¢, 49¢) across 5 stores each:</p>
<ul>
<li>39¢: 8, 12, 10, 9, 11 (mean = 10)</li>
<li>44¢: 7, 10, 6, 8, 9 (mean = 8)</li>
<li>49¢: 4, 8, 7, 9, 7 (mean = 7)</li>
</ul>
<p>Overall mean = 8.33, n = 15, r = 3</p>
<p>SSr (between) = 5(10 − 8.33)² + 5(8 − 8.33)² + 5(7 − 8.33)² = 23.3</p>
<p>SSu (within) = 34.0</p>
<p>MSSr = 23.3/2 = 11.65; MSSu = 34/12 = 2.83</p>
<p>F = 11.65/2.83 = <strong>4.12</strong></p>
<p>Critical value at α = 0.05, df = (2, 12): 3.89</p>
<p>Since 4.12 > 3.89, we <strong>reject H₀</strong>. There is a statistically significant difference in sales across price levels.</p>
</div>

### After ANOVA: Post-Hoc Tests

A significant ANOVA result tells us that at least one group differs, but not *which* groups differ. **Post-hoc tests** (e.g., Tukey's HSD, Bonferroni, Scheffé) are used to identify the specific group differences.

## 8.6 Cross-Tabulation and Association

**Cross-tabulation** (also called a contingency table) is one of the most common and most useful analytical techniques in business research. It displays the joint distribution of two categorical variables in a table format, allowing visual and statistical assessment of their relationship.

### Example: Confidence in Television by Income

A nationwide study of 1,402 adults cross-tabulated confidence in television institutions with income level:

| | Under $10K | $10K–$20K | Over $20K | Total |
|---|---|---|---|---|
| A great deal | 95 | 57 | 39 | 191 |
| Only some | 272 | 274 | 214 | 760 |
| Hardly any | 140 | 163 | 148 | 451 |
| **Total** | 507 | 494 | 401 | **1,402** |

The chi-square test of independence can then be applied to determine whether confidence level is statistically associated with income level.

Cross-tabulations are valuable because they:
- Are easy to construct and interpret
- Reveal patterns that summary statistics may obscure
- Serve as a foundation for more complex multivariate analyses
- Communicate findings effectively to non-technical audiences

## 8.7 Selecting the Right Test

Choosing the appropriate statistical test depends on:

| Research Question | Data Type | Appropriate Test |
|---|---|---|
| Does a frequency distribution match a hypothesized distribution? | Nominal | Chi-square goodness of fit |
| Are two categorical variables related? | Nominal × Nominal | Chi-square test of independence |
| Does a mean differ from a hypothesized value? | Interval/Ratio | One-sample t-test |
| Do two group means differ? | Interval/Ratio | Two-sample t-test |
| Do three or more group means differ? | Interval/Ratio | One-factor ANOVA (F-test) |

## 8.8 Presenting Research Findings

The final stage of the research process—and one of the most important—is **communicating findings** to decision-makers. A brilliant analysis is worthless if it is not communicated clearly and persuasively.

### The Research Report

A professional research report typically includes:

1. **Executive Summary**: A concise overview of the problem, method, key findings, and recommendations. This may be the only section some executives read.
2. **Background and Problem Definition**: Context for the research, including the business problem and research objectives
3. **Methodology**: Description of the research design, data collection methods, sampling plan, and analysis techniques. Sufficient detail for the study to be replicated.
4. **Results**: Presentation of findings, organized by research objective. Use clear tables, charts, and visualizations.
5. **Discussion and Interpretation**: What do the results mean for the business? Connect findings to the original research objectives and management questions.
6. **Limitations**: Honest acknowledgment of the study's limitations—sampling constraints, response rate issues, measurement challenges. This is not a sign of weakness but of credibility.
7. **Recommendations**: Actionable suggestions based on the findings. Bridge the gap between data and decisions.
8. **Appendices**: Technical details, questionnaire, detailed tables, and supplementary materials.

### Principles of Effective Communication

- **Know your audience**: Technical audiences want methodological detail; executives want actionable insights
- **Lead with findings**: Don't make the reader wade through methodology before learning the results
- **Use visual displays**: Well-designed charts and tables communicate patterns far more effectively than text alone
- **Distinguish statistical from practical significance**: A statistically significant difference may be too small to matter practically
- **Be honest about uncertainty**: Present confidence intervals, note limitations, and avoid overstating conclusions
- **Make recommendations actionable**: "Customer satisfaction with delivery speed should be addressed" is vague. "Invest in same-day delivery for orders over $50 in the top 10 metro areas" is actionable.

<div class="callout callout-jesuit">
<p class="callout-title">Jesuit Perspective: Research as Service</p>
<p>The Jesuit mission calls us to be "persons for others." In the context of business research, this means that our ultimate purpose is not to produce technically impressive analyses but to <strong>serve the decision-makers and stakeholders</strong> who will use our findings. Clear, honest, well-communicated research is an act of service. Conversely, research that obscures its limitations, cherry-picks favorable findings, or buries inconvenient truths fails in its fundamental purpose.</p>
<p>As you complete this course, remember that research methods are not an end in themselves. They are tools for <strong>reducing uncertainty, improving decisions, and ultimately creating value for organizations and the people they serve</strong>. The rigor, ethics, and care you bring to research reflect your character as a business professional and as a person.</p>
</div>

## 8.9 Course Synthesis

Over eight modules, we have traversed the entire research process:

1. **Module 1**: Why research matters; the research process; ethics
2. **Module 2**: Problem formulation; decision statements; hypotheses
3. **Module 3**: Research design (exploratory, descriptive, causal); validity
4. **Module 4**: Secondary data; literature review
5. **Module 5**: Qualitative methods (interviews, focus groups, observation)
6. **Module 6**: Survey design; measurement; questionnaire construction
7. **Module 7**: Sampling; sample size; data collection management
8. **Module 8**: Data analysis; hypothesis testing; reporting

Each stage depends on the ones before it. A poorly formulated problem leads to a misguided design. A flawed questionnaire produces unreliable data. A biased sample undermines even the best analysis. The research process is a chain, and its strength depends on its weakest link.

The competencies you have developed in this course—critical thinking about evidence, methodological rigor, ethical sensitivity, and clear communication—will serve you throughout your career, whether you commission research, conduct it yourself, or evaluate research presented by others.

---

## Recommended Resources

### Academic Texts
- Zikmund, W. G., Babin, B. J., Carr, J. C., & Griffin, M. (2013). *Business Research Methods* (9th ed.). Cengage Learning. — Chapters 17–22, 24.
- Churchill, G. A., & Iacobucci, D. (2015). *Marketing Research: Methodological Foundations*. Cengage Learning. — Chapters 17–20.
- Field, A. (2018). *Discovering Statistics Using IBM SPSS Statistics* (5th ed.). SAGE Publications. — An accessible guide to statistical analysis.
- Tufte, E. R. (2001). *The Visual Display of Quantitative Information* (2nd ed.). Graphics Press. — The definitive work on data visualization.

### Interactive Tools
- **Gonzaga Sampling Simulator** — Includes advanced analysis modules for hypothesis testing, power analysis, and confidence interval construction with interactive visualizations: [analytics.gonzaga.edu/sampling/](https://analytics.gonzaga.edu/sampling/)

### Online Resources
- Seeing Theory: A Visual Introduction to Probability and Statistics — [seeing-theory.brown.edu](https://seeing-theory.brown.edu)
- Khan Academy: Statistics and Probability — [khanacademy.org](https://www.khanacademy.org/math/statistics-probability)
- UCLA Statistical Consulting: Choosing the Correct Statistical Test — [stats.oarc.ucla.edu](https://stats.oarc.ucla.edu/other/mult-pkg/whatstat/)

### Companion Resource
- Patil, V. H. (2024). *Notes on Survey Design*, Chapter 5: Data Collection, Cleaning, and Analysis — [patilv.com/Survey-Design/chapters/chapter-5/](https://patilv.com/Survey-Design/chapters/chapter-5/)
