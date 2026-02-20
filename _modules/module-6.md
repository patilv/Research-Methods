---
title: "Survey Research and Questionnaire Design"
module_number: 6
author: "Vivek H. Patil, Ph.D."
institution: "Gonzaga University"
subtitle: "Designing surveys, constructing questionnaires, understanding measurement scales, and minimizing error."
learning_objectives:
  - "Identify the major sources of error in survey research and strategies to minimize them"
  - "Compare survey administration modes and their respective trade-offs"
  - "Define measurement and scaling, and distinguish among nominal, ordinal, interval, and ratio scales"
  - "Design Likert scales, semantic differential scales, and other attitude measurement instruments"
  - "Evaluate measurement accuracy through reliability and validity"
  - "Apply principles of questionnaire design, including question wording, order, and format"
  - "Conduct effective pretesting of survey instruments"
discussion_questions:
  - "Draft three survey questions about customer satisfaction with a restaurant—one that demonstrates good practice and two that illustrate common wording problems (double-barreled, leading, or vague). Explain what is wrong with the problematic questions and how to fix them."
  - "A researcher measures 'brand loyalty' by asking a single question: 'Are you loyal to Brand X? (Yes/No).' Critique this approach from the perspectives of measurement level, validity, and reliability. How would you improve the measurement?"
  - "The Gallup Poll and Harris Poll in 1969 asked about the same topic (troop withdrawal from Vietnam) but obtained very different results due to question framing. Find or create a modern example where question wording could produce similarly divergent results. What does this imply for survey design ethics?"
  - "Consider the concept of *uninformed response bias*—the tendency for respondents to offer opinions on topics they know nothing about. How does this challenge the assumption that survey data represent genuine attitudes? What safeguards can researchers implement?"
---

## 6.1 The Survey as a Research Method

The **survey** is the most widely used data collection method in business research. Surveys involve systematically asking a sample of individuals a set of questions and recording their responses. When designed well, surveys provide efficient, standardized data that can be analyzed statistically and generalized to broader populations.

However, surveys are also susceptible to numerous errors. A poorly designed survey can produce data that are not only useless but actively misleading. This module covers both the science of measurement and the art of questionnaire construction, equipping you to design surveys that produce valid, reliable, and actionable data.

## 6.2 Sources of Survey Error

Survey errors can be classified into several categories (adapted from Kumar, Aaker, & Day, 2002; Zikmund et al., 2013):

### Non-response Errors
Not everyone selected for a survey responds. **Non-response error** occurs when those who do not respond differ systematically from those who do. Common reasons for non-response include:
- The perceived length or difficulty of the questionnaire
- Lack of interest in the topic
- Fear or suspicion about how data will be used
- Invasion of privacy concerns
- Hostility toward the sponsor

### Factors Affecting Response Rates
Research has identified several factors that influence response rates:
- **Perceived workload**: Shorter questionnaires generally yield higher response rates
- **Topic interest**: Respondents are more likely to participate when the topic interests them
- **Sponsor credibility**: Well-known, trusted organizations get better response rates
- **Incentives**: Monetary or non-monetary incentives can improve participation
- **Pre-notification**: Telephone pre-notification before a mail survey can substantially increase response rates. Jolson (1977) found response rates increased from 26.2% to 46.3% for TV viewing habits, and from 20.5% to 68.2% for a collegiate clothing study.

### Response Inaccuracy
Even among those who respond, answers may be inaccurate:
- **Inability to respond**: The respondent may not know the answer or may not remember accurately (recall error)
- **Unwillingness to respond accurately**: Concerns about privacy, social desirability bias (wanting to appear favorable), prestige-seeking, courtesy bias (agreeing with the interviewer), acquiescence bias (tendency to agree), and extremity bias (tendency to select extreme scale points)

<div class="callout callout-case-study">
<p class="callout-title">Case Study: Uninformed Response Bias</p>
<p>Hawkins and Coney (1981) demonstrated a striking phenomenon: respondents often express opinions on topics they know nothing about. In a national survey, the general public gave the "National Bureau of Consumer Complaints" a positive effectiveness rating (mean = 2.72 on a 5-point scale)—even though 75% had never heard of it. (Indeed, the Bureau does not exist.) Among lawyers—who would be expected to know about such an organization—only 50% offered an opinion, and their ratings were less favorable (mean = 3.24). The lesson: <strong>the mere act of asking a question can create an opinion that did not previously exist</strong>.</p>
<p><em>Source: Hawkins, D. I. & Coney, K. A. (1981). Uninformed Response Error in Survey Research. Journal of Marketing Research, 18(August), 370–374.</em></p>
</div>

## 6.3 Survey Administration Modes

The choice of administration mode affects sampling, information quality, cost, speed, and response rates. Each mode has distinct advantages and limitations (adapted from Churchill & Iacobucci, 2002):

### Personal Interview (At Home or Mall Intercept)
- **Strengths**: High response rates; any question type can be used; probing of open-ended questions; visual stimuli can be employed; flexible sequencing
- **Weaknesses**: Interviewer bias; difficulty supervising interviewers; generally most expensive; slower (especially at-home)

### Written Formats (Mail, Fax, Email, Web)
- **Strengths**: No interviewer bias; respondents work at own pace; anonymity encourages honest responses to sensitive questions; usually least expensive; wide coverage
- **Weaknesses**: Low response rates; ambiguous questions cannot be clarified; no probing; inflexible sequencing; slow (mail) or variable (email/web)

### Telephone
- **Strengths**: Good response rates; moderate cost; quick turnaround; good interviewer supervision; flexible question sequencing; easy call-backs
- **Weaknesses**: No visual aids; difficult to build rapport; interviews must be brief; representation problems due to unlisted numbers and cell-only households

### Online Surveys (Contemporary Standard)
In the years since these foundational taxonomies were developed, **online surveys** have become the dominant mode for many types of business research. Platforms such as Qualtrics, SurveyMonkey, Google Forms, and Microsoft Forms offer:
- **Advantages**: Very low cost; rapid deployment and data collection; sophisticated logic and branching; multimedia capabilities; automatic data capture; global reach
- **Limitations**: Sampling frame challenges (who is in the online panel?); self-selection bias; screen fatigue; device variability; digital divide (excluding populations with limited internet access)

### Choosing a Survey Mode

The choice depends on multiple factors:
- **Sampling requirements**: Who needs to be reached?
- **Question complexity**: Do questions require visual aids, complex branching, or lengthy response formats?
- **Sensitivity of content**: Will respondents be honest in the presence of an interviewer?
- **Budget and timeline**: What resources are available?
- **Required response rate**: Can you tolerate lower response rates?

## 6.4 Measurement and Scaling Fundamentals

**Measurement** is the standardized process of assigning numbers or other symbols to characteristics of objects of interest, according to pre-specified rules. **Scaling** is the process of creating a continuum on which objects are located according to the amount of a characteristic they possess (Churchill & Iacobucci, 2015).

The type of measurement depends on the type of data. Four levels of measurement form a hierarchy of increasing mathematical power:

### The Four Levels of Measurement

| Level | Properties | Permissible Operations | Central Tendency | Examples |
|---|---|---|---|---|
| **Nominal** | Identity only | =, ≠; Counting | Mode | Gender, brand names, jersey numbers, product categories |
| **Ordinal** | Identity + Order | =, ≠, >, <; Ranking | Mode, Median | Customer satisfaction rank, education level, competitive ranking |
| **Interval** | Identity + Order + Equal Distances | =, ≠, >, <, +, − | Mode, Median, Mean | Temperature (°F/°C), attitude scales, standardized test scores |
| **Ratio** | Identity + Order + Equal Distances + True Zero | =, ≠, >, <, +, −, ×, ÷ | Mode, Median, Arithmetic & Geometric Means | Age, income ($), sales volume, market share, weight |

### The Intrinsic vs. Measured Level

An important subtlety: a variable has an **intrinsic** measurement level (its true nature), but researchers can choose to measure it at a **lower** level. For example, income is intrinsically ratio-scaled, but surveys often measure it with ordinal categories (e.g., "Under $50,000 / $50,000–$100,000 / Over $100,000"). Measuring at a lower level **loses information** and limits the analyses that can be performed.

However, you **cannot** measure at a higher level than the intrinsic level. Gender is intrinsically nominal—assigning numbers (Male = 1, Female = 0) does not make it interval or ratio, even though statistical software will happily compute a "mean" of such codes. The researcher must be vigilant about this.

## 6.5 Attitude Measurement Scales

Attitudes—predispositions to respond favorably or unfavorably to objects, ideas, or people—are central to much business research. Several scaling approaches are commonly used:

### Likert Scale
Respondents indicate their level of agreement with a series of statements, typically on a 5- or 7-point scale ranging from "Strongly Disagree" to "Strongly Agree."

*Example*: Rate your agreement with each statement:
1. The customer service representative was knowledgeable. (SD / D / N / A / SA)
2. The customer service representative was courteous. (SD / D / N / A / SA)
3. My issue was resolved promptly. (SD / D / N / A / SA)

### Semantic Differential Scale
Respondents rate an object on a series of bipolar adjective pairs (e.g., "Not Trustworthy — Trustworthy," "Unreliable — Reliable"), typically on a 7-point scale.

### Design Considerations for Single-Item Scales

Several design choices affect the quality of scale data:

| Design Choice | Considerations |
|---|---|
| **Number of categories** | More categories (5–7) provide finer discrimination but may confuse some respondents. Fewer categories (3–4) are simpler but less sensitive. |
| **Anchor strength** | "Colorful" vs. "Very colorful" vs. "Extremely colorful"—stronger anchors produce more moderate responses |
| **Category labeling** | All categories labeled (recommended) vs. only endpoints labeled |
| **Balance** | Balanced scales (equal positive and negative options) are generally superior to unbalanced scales |
| **Neutral midpoint** | Including a neutral option (e.g., "Neither Agree nor Disagree") avoids forcing respondents to choose a side but may attract satisficers |

<div class="callout callout-key-concept">
<p class="callout-title">Key Concept: The Impact of Scale Design on Responses</p>
<p>Schwarz et al. (1991) demonstrated that the numeric values assigned to response categories can change how respondents interpret them. When asked "How successful have you been in life?" on a 0-to-10 scale, respondents interpreted "0" as the absence of success. On a −5 to +5 scale, they interpreted "−5" as the presence of failure—a psychologically different anchor. The result: different response distributions from the same underlying population.</p>
<p><em>Source: Schwarz, N., Knäuper, B., Hippler, H.-J., Noelle-Neumann, E., & Clark, L. (1991). Rating Scales: Numeric Values May Change the Meaning of Scale Labels. Public Opinion Quarterly, 55(4), 570–582.</em></p>
</div>

## 6.6 The Effect of Category Ranges

Research by Rockwood, Sangster, and Dillman (1997) demonstrated that the range of response categories can dramatically influence responses. When asked about time spent studying:
- **Low categories** (Less than 0.5 / 0.5–1 / 1–1.5 / 1.5–2 / 2–2.5 / More than 2.5 hours): 23% reported studying 2.5+ hours
- **High categories** (Less than 2.5 / 2.5–3 / 3–3.5 / 3.5–4 / 4–4.5 / More than 4.5 hours): 69% reported studying 2.5+ hours

The categories served as an implicit frame of reference, signaling to respondents what was "normal." This finding has profound implications: **the design of the response scale can create the very data it purports to measure.**

## 6.7 Measurement Accuracy: Validity and Reliability

The quality of survey data depends fundamentally on the accuracy of the measurements. Accuracy has two core components:

**Observed Score = True Score + Systematic Error + Random Error**

### Validity
A measure is **valid** if it measures what it is supposed to measure. Differences in observed scores should reflect true differences in the characteristic being studied. There are several types of validity:
- **Face validity**: Does the measure *appear* to measure what it claims to? (Weakest form)
- **Content validity**: Does the measure cover the full domain of the concept?
- **Criterion validity**: Does the measure predict a known criterion? (Predictive and concurrent validity)
- **Construct validity**: Does the measure relate to other measures in theoretically expected ways? (Convergent and discriminant validity)

### Reliability
A measure is **reliable** if it produces **consistent results** across repeated administrations, different observers, or equivalent forms of the measure. Reliability is necessary but not sufficient for validity—a scale can be consistently wrong.

### Additional Accuracy Criteria
- **Sensitivity**: The extent to which the scale can discriminate among respondents who differ on the construct
- **Generalizability**: The ease with which the scale can be administered and interpreted across different settings and populations

## 6.8 Questionnaire Design Principles

Designing a questionnaire is both science and art. Even well-conceived measurement scales can fail if the questions are poorly worded, awkwardly ordered, or embedded in a confusing format.

### Question Wording Guidelines

1. **Use simple, direct, familiar vocabulary.** Avoid jargon, technical terms, and complex sentence structures.

2. **Avoid vague or ambiguous words.** "How often do you visit a fast-food restaurant?" with options like "Occasionally / Sometimes / Often" is meaningless—these words mean different things to different people.

3. **Avoid double-barreled questions.** "Are you satisfied with the price and the service of Taco Bell?" conflates two different evaluations. Separate them into two questions.

4. **Avoid leading or loaded questions.** "Don't you think, because it's so greasy, fast food is one of the worst types of food?" pushes respondents toward a particular answer.

5. **Ensure questions are applicable to all respondents.** A question about "your spouse's income" is not applicable to single respondents. Use filter questions or skip logic.

6. **Keep questions at an appropriate length.** Very long questions strain working memory; very short questions may lack necessary context.

### The Power of Question Framing

Classic polling data illustrate how framing affects responses:

**Gallup Poll (1969)**: "President Nixon has ordered the withdrawal of 25,000 US troops from Vietnam in the next three months. How do you feel about this—do you think troops should be withdrawn at a faster rate?"
- Faster: 42%, Same as now: 29%, Slower: 16%, No opinion: 13%

**Harris Poll (1969)**: "In general, do you feel the pace at which the president is withdrawing troops is too fast, too slow, or about right?"
- Too slow: 28%, About right: 49%, Too fast: 6%, No opinion: 18%

The same topic, asked with different frames, produced dramatically different results. This finding underscores the enormous responsibility that questionnaire designers bear.

### Response Category Design

- **Mutually exclusive**: Each response should fit into only one category
- **Exhaustive**: All possible responses should be covered (include "Other" if needed)
- **Order effects**: Be aware that the order of response options can influence choices (use randomization when possible)
- **Don't Know / No Opinion**: Consider whether to include these options; omitting them may force uninformed responses

## 6.9 Pretesting

Before fielding a survey, **pretesting** is essential. Pretesting involves administering the questionnaire to a small sample under conditions similar to the actual study, with the goal of identifying problems before they contaminate the full data collection.

Pretesting evaluates:
- **Variation**: Do responses vary adequately, or do most respondents give the same answer? (If so, the question may not be discriminating)
- **Meaning**: Do respondents understand the questions as intended? (Ask respondents to paraphrase the question)
- **Task difficulty**: Can respondents answer the questions without undue effort?
- **Respondent interest and attention**: Do respondents remain engaged throughout?
- **Flow**: Does the questionnaire progress logically?
- **Skip patterns**: Does the branching logic work correctly?
- **Length**: Can respondents complete the questionnaire in a reasonable time?

<div class="callout callout-jesuit">
<p class="callout-title">Jesuit Perspective</p>
<p>The meticulous attention to questionnaire design—ensuring questions are clear, fair, unbiased, and respectful of respondents' time and intelligence—is an expression of <em>cura personalis</em> in research practice. Every poorly worded, leading, or confusing question represents a failure to respect the participant. Every well-crafted question represents an act of care. The Jesuit insistence on doing things well—<em>magis</em>—demands that we invest the effort to get measurement right.</p>
</div>

---

## Recommended Resources

### Academic Texts
- Churchill, G. A., & Iacobucci, D. (2015). *Marketing Research: Methodological Foundations*. Cengage Learning. — Chapters 9–12.
- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). *Internet, Phone, Mail, and Mixed-Mode Surveys: The Tailored Design Method* (4th ed.). Wiley.
- DeVellis, R. F., & Thorpe, C. T. (2022). *Scale Development: Theory and Applications* (5th ed.). SAGE Publications.

### Key Articles
- Hawkins, D. I. & Coney, K. A. (1981). Uninformed Response Error in Survey Research. *Journal of Marketing Research*, 18(August), 370–374.
- Schwarz, N., et al. (1991). Rating Scales: Numeric Values May Change the Meaning of Scale Labels. *Public Opinion Quarterly*, 55(4), 570–582.
- Rockwood, T. H., Sangster, R. L., & Dillman, D. A. (1997). The Effect of Response Categories on Questionnaire Answers. *Sociological Methods & Research*, 26(1), 118–140.
- Jolson, M. A. (1977). How to Double or Triple Mail-Survey Response Rates. *Journal of Marketing*, 41(4), 78–81.

### Companion Resource
- Patil, V. H. (2024). *Notes on Survey Design*, Chapter 2: Survey Process and Errors; Chapter 3: Measurement and Scaling — [patilv.com/Survey-Design/](https://patilv.com/Survey-Design/)
